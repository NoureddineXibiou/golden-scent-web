
import React, { useState, useRef, useEffect, useMemo } from "react";
import { Search } from "lucide-react";

type Perfume = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type PerfumeSearchBarProps = {
  perfumes: Perfume[];
  onResults: (results: Perfume[], highlight: (name: string) => React.ReactNode) => void;
};

function useDebouncedValue<T>(value: T, delay: number) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
}

const PerfumeSearchBar: React.FC<PerfumeSearchBarProps> = ({ perfumes, onResults }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const debouncedQuery = useDebouncedValue(query, 180);
  const boxRef = useRef<HTMLDivElement>(null);

  // Filtering perfumes
  const filtered = useMemo(() => {
    if (!debouncedQuery) return perfumes;
    const q = debouncedQuery.trim().toLowerCase();
    return perfumes.filter(p => p.name.toLowerCase().includes(q));
  }, [debouncedQuery, perfumes]);

  // Highlight helper
  const highlightMatch = (name: string) => {
    if (!debouncedQuery) return name;
    const reg = new RegExp(`(${debouncedQuery})`, "ig");
    return (
      <>
        {name.split(reg).map((part, i) =>
          reg.test(part) ? (
            <span
              key={i}
              className="bg-gold-primary/10 text-gold-primary px-0.5 rounded font-bold"
            >
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  };

  // Fire up to parent
  useEffect(() => {
    onResults(filtered, highlightMatch);
  }, [filtered, onResults, highlightMatch]);

  // Animate: focus input
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  // Click outside to close
  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (
        boxRef.current &&
        !boxRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  // Keyboard ESC to close
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [open]);

  const handleOpen = () => setOpen(true);
  const handleClear = () => setQuery("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

  return (
    <div className="relative z-40 flex items-center justify-end">
      {/* ICON BUTTON */}
      <button
        className="p-1 text-gold-primary rounded-full border border-transparent hover:bg-gold-primary/10 focus-visible:border-gold-primary outline-none transition"
        style={{ width: 32, height: 32, minWidth: 32 }}
        aria-label="Open search"
        onClick={handleOpen}
        tabIndex={0}
        type="button"
      >
        <Search size={18} />
      </button>
      {/* SEARCH PANEL */}
      {open && (
        <div
          ref={boxRef}
          className="absolute right-0 top-full mt-2 w-[325px] border border-gold-primary rounded-xl shadow-lg bg-background animate-fade-in"
          style={{
            zIndex: 100,
            transition: 'box-shadow 0.23s, border 0.18s',
            boxShadow: open ? "0px 4px 32px 0px rgba(212,175,55,0.08)" : "none",
          }}
        >
          <div className="p-1">
            <div className="text-center font-playfair text-xl font-semibold py-2 text-gold-primary tracking-wide">
              Search Perfumes
            </div>
            <form
              className="flex items-center gap-1 px-2 pb-3"
              onSubmit={e => e.preventDefault()}
              autoComplete="off"
            >
              <input
                ref={inputRef}
                type="text"
                autoFocus
                spellCheck={false}
                placeholder="Search perfumes..."
                value={query}
                onChange={handleInput}
                className="flex-1 bg-transparent border border-gold-primary rounded-md px-3 py-2 text-gold-primary placeholder:text-gold-primary/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary focus:border-gold-primary text-base transition shadow"
                style={{
                  fontFamily: 'inherit',
                  background: "rgba(30,24,14,0.93)",
                  boxShadow: "0 0 0 0px rgba(212,175,55,0.11)"
                }}
              />
              <button
                className="p-2 ml-1 rounded bg-gold-primary text-black hover:bg-gold-primary/90 border border-gold-primary shadow transition"
                type="button"
                aria-label="Clear search"
                disabled={!query}
                onClick={handleClear}
                style={{ display: query ? "block" : "none" }}
              >
                ×
              </button>
              <button
                className="p-2 ml-1 rounded bg-gold-primary text-black hover:bg-gold-primary/90 border border-gold-primary transition"
                type="submit"
                aria-label="Submit search"
                tabIndex={-1}
              >
                <Search size={18} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerfumeSearchBar;
