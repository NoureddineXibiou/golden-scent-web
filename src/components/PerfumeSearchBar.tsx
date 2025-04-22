import React, { useRef, useState, useEffect, useMemo } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// Utility: debounce (not from lodash to keep it light)
function useDebouncedValue<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
}

type Perfume = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type Props = {
  perfumes: Perfume[];
  onFiltered: (results: Perfume[], matchHighlighter: (n: string) => React.ReactNode) => void;
};

const PerfumeSearchBar: React.FC<Props> = ({ perfumes, onFiltered }) => {
  const [active, setActive] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Debounced search for smooth performance
  const debouncedQuery = useDebouncedValue(query, 180);

  // Search logic
  const matches = useMemo(() => {
    if (!debouncedQuery) return perfumes;
    const q = debouncedQuery.trim().toLowerCase();
    return perfumes.filter((p) => p.name.toLowerCase().includes(q));
  }, [perfumes, debouncedQuery]);

  // Highlight the part of text that matches the search
  const highlighter = (name: string) => {
    if (!debouncedQuery) return name;
    const reg = new RegExp(`(${debouncedQuery})`, "ig");
    return (
      <>
        {name.split(reg).map((part, i) =>
          reg.test(part) ? (
            <span key={i} className="text-gold-primary font-bold bg-gold-primary/10 rounded px-0.5">{part}</span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  };

  // Callback up so the parent can update visible perfumes
  useEffect(() => {
    onFiltered(matches, highlighter);
  }, [matches, onFiltered, highlighter]);

  // Focus input on open
  useEffect(() => {
    if (active) setTimeout(() => inputRef.current?.focus(), 250);
  }, [active]);

  // Handlers
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

  const handleOpen = () => setActive(true);

  const handleClose = () => {
    setActive(false);
    setQuery("");
  };

  const handleClear = () => setQuery("");

  // Click outside to close
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        if (active) setActive(false);
      }
    }
    if (active) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [active]);

  return (
    <div className="relative flex items-center">
      {/* Search Icon Button */}
      <motion.button
        aria-label="Open search"
        className={cn(
          "text-gold-primary hover:text-gold-primary/90 rounded-full p-2 outline-none focus-visible:ring-2 focus-visible:ring-gold-primary/80 transition-all border border-transparent bg-background/70 shadow-none",
          active && "shadow-lg border-gold-primary/40"
        )}
        whileTap={{ scale: 0.93 }}
        onClick={handleOpen}
        style={{ zIndex: 30 }}
        tabIndex={0}
        type="button"
      >
        <Search className={cn("w-5 h-5")} />
      </motion.button>

      {/* SearchBar input overlay (animated) */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="absolute right-0 top-full mt-2 z-30"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98, transition: { duration: 0.14 } }}
            transition={{ type: "spring", stiffness: 330, damping: 26, duration: 0.27 }}
          >
            <div className="flex items-center w-72 md:w-96 bg-background border border-gold-primary/40 shadow-2xl rounded-lg px-3 py-2 focus-within:shadow-gold-primary/30 duration-200">
              <Search className="w-5 h-5 mr-2 text-gold-primary" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search perfumes..."
                value={query}
                onChange={handleInput}
                className="flex-1 bg-transparent outline-none text-gold-primary text-base placeholder:text-gold-primary/50"
                spellCheck={false}
                autoFocus
              />
              {query && (
                <button
                  className="ml-2 px-1 text-gold-primary hover:text-gold-primary/70 focus-visible:outline-gold-primary"
                  aria-label="Clear"
                  type="button"
                  onClick={handleClear}
                >
                  ×
                </button>
              )}
              <button
                className="ml-1 px-1 text-foreground hover:text-gold-primary/75 focus-visible:outline-gold-primary"
                aria-label="Close"
                type="button"
                onClick={handleClose}
              >
                <span className="font-bold text-xl" style={{ lineHeight: "1" }}>×</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PerfumeSearchBar;
