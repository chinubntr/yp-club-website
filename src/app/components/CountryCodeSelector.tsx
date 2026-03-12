import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown } from "lucide-react";

export interface CountryCode {
  code: string;
  dial: string;
  flag: string;
  name: string;
}

export const countryCodes: CountryCode[] = [
  { code: "AE", dial: "+971", flag: "\uD83C\uDDE6\uD83C\uDDEA", name: "UAE" },
  { code: "AF", dial: "+93", flag: "\uD83C\uDDE6\uD83C\uDDEB", name: "Afghanistan" },
  { code: "AL", dial: "+355", flag: "\uD83C\uDDE6\uD83C\uDDF1", name: "Albania" },
  { code: "DZ", dial: "+213", flag: "\uD83C\uDDE9\uD83C\uDDFF", name: "Algeria" },
  { code: "AR", dial: "+54", flag: "\uD83C\uDDE6\uD83C\uDDF7", name: "Argentina" },
  { code: "AM", dial: "+374", flag: "\uD83C\uDDE6\uD83C\uDDF2", name: "Armenia" },
  { code: "AU", dial: "+61", flag: "\uD83C\uDDE6\uD83C\uDDFA", name: "Australia" },
  { code: "AT", dial: "+43", flag: "\uD83C\uDDE6\uD83C\uDDF9", name: "Austria" },
  { code: "AZ", dial: "+994", flag: "\uD83C\uDDE6\uD83C\uDDFF", name: "Azerbaijan" },
  { code: "BH", dial: "+973", flag: "\uD83C\uDDE7\uD83C\uDDED", name: "Bahrain" },
  { code: "BD", dial: "+880", flag: "\uD83C\uDDE7\uD83C\uDDE9", name: "Bangladesh" },
  { code: "BY", dial: "+375", flag: "\uD83C\uDDE7\uD83C\uDDFE", name: "Belarus" },
  { code: "BE", dial: "+32", flag: "\uD83C\uDDE7\uD83C\uDDEA", name: "Belgium" },
  { code: "BR", dial: "+55", flag: "\uD83C\uDDE7\uD83C\uDDF7", name: "Brazil" },
  { code: "BG", dial: "+359", flag: "\uD83C\uDDE7\uD83C\uDDEC", name: "Bulgaria" },
  { code: "KH", dial: "+855", flag: "\uD83C\uDDF0\uD83C\uDDED", name: "Cambodia" },
  { code: "CA", dial: "+1", flag: "\uD83C\uDDE8\uD83C\uDDE6", name: "Canada" },
  { code: "CL", dial: "+56", flag: "\uD83C\uDDE8\uD83C\uDDF1", name: "Chile" },
  { code: "CN", dial: "+86", flag: "\uD83C\uDDE8\uD83C\uDDF3", name: "China" },
  { code: "CO", dial: "+57", flag: "\uD83C\uDDE8\uD83C\uDDF4", name: "Colombia" },
  { code: "HR", dial: "+385", flag: "\uD83C\uDDED\uD83C\uDDF7", name: "Croatia" },
  { code: "CY", dial: "+357", flag: "\uD83C\uDDE8\uD83C\uDDFE", name: "Cyprus" },
  { code: "CZ", dial: "+420", flag: "\uD83C\uDDE8\uD83C\uDDFF", name: "Czech Republic" },
  { code: "DK", dial: "+45", flag: "\uD83C\uDDE9\uD83C\uDDF0", name: "Denmark" },
  { code: "EG", dial: "+20", flag: "\uD83C\uDDEA\uD83C\uDDEC", name: "Egypt" },
  { code: "EE", dial: "+372", flag: "\uD83C\uDDEA\uD83C\uDDEA", name: "Estonia" },
  { code: "ET", dial: "+251", flag: "\uD83C\uDDEA\uD83C\uDDF9", name: "Ethiopia" },
  { code: "FI", dial: "+358", flag: "\uD83C\uDDEB\uD83C\uDDEE", name: "Finland" },
  { code: "FR", dial: "+33", flag: "\uD83C\uDDEB\uD83C\uDDF7", name: "France" },
  { code: "GE", dial: "+995", flag: "\uD83C\uDDEC\uD83C\uDDEA", name: "Georgia" },
  { code: "DE", dial: "+49", flag: "\uD83C\uDDE9\uD83C\uDDEA", name: "Germany" },
  { code: "GH", dial: "+233", flag: "\uD83C\uDDEC\uD83C\uDDED", name: "Ghana" },
  { code: "GR", dial: "+30", flag: "\uD83C\uDDEC\uD83C\uDDF7", name: "Greece" },
  { code: "HK", dial: "+852", flag: "\uD83C\uDDED\uD83C\uDDF0", name: "Hong Kong" },
  { code: "HU", dial: "+36", flag: "\uD83C\uDDED\uD83C\uDDFA", name: "Hungary" },
  { code: "IS", dial: "+354", flag: "\uD83C\uDDEE\uD83C\uDDF8", name: "Iceland" },
  { code: "IN", dial: "+91", flag: "\uD83C\uDDEE\uD83C\uDDF3", name: "India" },
  { code: "ID", dial: "+62", flag: "\uD83C\uDDEE\uD83C\uDDE9", name: "Indonesia" },
  { code: "IQ", dial: "+964", flag: "\uD83C\uDDEE\uD83C\uDDF6", name: "Iraq" },
  { code: "IE", dial: "+353", flag: "\uD83C\uDDEE\uD83C\uDDEA", name: "Ireland" },
  { code: "IL", dial: "+972", flag: "\uD83C\uDDEE\uD83C\uDDF1", name: "Israel" },
  { code: "IT", dial: "+39", flag: "\uD83C\uDDEE\uD83C\uDDF9", name: "Italy" },
  { code: "JP", dial: "+81", flag: "\uD83C\uDDEF\uD83C\uDDF5", name: "Japan" },
  { code: "JO", dial: "+962", flag: "\uD83C\uDDEF\uD83C\uDDF4", name: "Jordan" },
  { code: "KZ", dial: "+7", flag: "\uD83C\uDDF0\uD83C\uDDFF", name: "Kazakhstan" },
  { code: "KE", dial: "+254", flag: "\uD83C\uDDF0\uD83C\uDDEA", name: "Kenya" },
  { code: "KW", dial: "+965", flag: "\uD83C\uDDF0\uD83C\uDDFC", name: "Kuwait" },
  { code: "LV", dial: "+371", flag: "\uD83C\uDDF1\uD83C\uDDFB", name: "Latvia" },
  { code: "LB", dial: "+961", flag: "\uD83C\uDDF1\uD83C\uDDE7", name: "Lebanon" },
  { code: "LT", dial: "+370", flag: "\uD83C\uDDF1\uD83C\uDDF9", name: "Lithuania" },
  { code: "LU", dial: "+352", flag: "\uD83C\uDDF1\uD83C\uDDFA", name: "Luxembourg" },
  { code: "MY", dial: "+60", flag: "\uD83C\uDDF2\uD83C\uDDFE", name: "Malaysia" },
  { code: "MT", dial: "+356", flag: "\uD83C\uDDF2\uD83C\uDDF9", name: "Malta" },
  { code: "MX", dial: "+52", flag: "\uD83C\uDDF2\uD83C\uDDFD", name: "Mexico" },
  { code: "MA", dial: "+212", flag: "\uD83C\uDDF2\uD83C\uDDE6", name: "Morocco" },
  { code: "NL", dial: "+31", flag: "\uD83C\uDDF3\uD83C\uDDF1", name: "Netherlands" },
  { code: "NZ", dial: "+64", flag: "\uD83C\uDDF3\uD83C\uDDFF", name: "New Zealand" },
  { code: "NG", dial: "+234", flag: "\uD83C\uDDF3\uD83C\uDDEC", name: "Nigeria" },
  { code: "NO", dial: "+47", flag: "\uD83C\uDDF3\uD83C\uDDF4", name: "Norway" },
  { code: "OM", dial: "+968", flag: "\uD83C\uDDF4\uD83C\uDDF2", name: "Oman" },
  { code: "PK", dial: "+92", flag: "\uD83C\uDDF5\uD83C\uDDF0", name: "Pakistan" },
  { code: "PS", dial: "+970", flag: "\uD83C\uDDF5\uD83C\uDDF8", name: "Palestine" },
  { code: "PA", dial: "+507", flag: "\uD83C\uDDF5\uD83C\uDDE6", name: "Panama" },
  { code: "PE", dial: "+51", flag: "\uD83C\uDDF5\uD83C\uDDEA", name: "Peru" },
  { code: "PH", dial: "+63", flag: "\uD83C\uDDF5\uD83C\uDDED", name: "Philippines" },
  { code: "PL", dial: "+48", flag: "\uD83C\uDDF5\uD83C\uDDF1", name: "Poland" },
  { code: "PT", dial: "+351", flag: "\uD83C\uDDF5\uD83C\uDDF9", name: "Portugal" },
  { code: "QA", dial: "+974", flag: "\uD83C\uDDF6\uD83C\uDDE6", name: "Qatar" },
  { code: "RO", dial: "+40", flag: "\uD83C\uDDF7\uD83C\uDDF4", name: "Romania" },
  { code: "RU", dial: "+7", flag: "\uD83C\uDDF7\uD83C\uDDFA", name: "Russia" },
  { code: "SA", dial: "+966", flag: "\uD83C\uDDF8\uD83C\uDDE6", name: "Saudi Arabia" },
  { code: "RS", dial: "+381", flag: "\uD83C\uDDF7\uD83C\uDDF8", name: "Serbia" },
  { code: "SG", dial: "+65", flag: "\uD83C\uDDF8\uD83C\uDDEC", name: "Singapore" },
  { code: "SK", dial: "+421", flag: "\uD83C\uDDF8\uD83C\uDDF0", name: "Slovakia" },
  { code: "SI", dial: "+386", flag: "\uD83C\uDDF8\uD83C\uDDEE", name: "Slovenia" },
  { code: "ZA", dial: "+27", flag: "\uD83C\uDDFF\uD83C\uDDE6", name: "South Africa" },
  { code: "KR", dial: "+82", flag: "\uD83C\uDDF0\uD83C\uDDF7", name: "South Korea" },
  { code: "ES", dial: "+34", flag: "\uD83C\uDDEA\uD83C\uDDF8", name: "Spain" },
  { code: "LK", dial: "+94", flag: "\uD83C\uDDF1\uD83C\uDDF0", name: "Sri Lanka" },
  { code: "SE", dial: "+46", flag: "\uD83C\uDDF8\uD83C\uDDEA", name: "Sweden" },
  { code: "CH", dial: "+41", flag: "\uD83C\uDDE8\uD83C\uDDED", name: "Switzerland" },
  { code: "TW", dial: "+886", flag: "\uD83C\uDDF9\uD83C\uDDFC", name: "Taiwan" },
  { code: "TH", dial: "+66", flag: "\uD83C\uDDF9\uD83C\uDDED", name: "Thailand" },
  { code: "TR", dial: "+90", flag: "\uD83C\uDDF9\uD83C\uDDF7", name: "Turkey" },
  { code: "UA", dial: "+380", flag: "\uD83C\uDDFA\uD83C\uDDE6", name: "Ukraine" },
  { code: "GB", dial: "+44", flag: "\uD83C\uDDEC\uD83C\uDDE7", name: "United Kingdom" },
  { code: "US", dial: "+1", flag: "\uD83C\uDDFA\uD83C\uDDF8", name: "United States" },
  { code: "UY", dial: "+598", flag: "\uD83C\uDDFA\uD83C\uDDFE", name: "Uruguay" },
  { code: "UZ", dial: "+998", flag: "\uD83C\uDDFA\uD83C\uDDFF", name: "Uzbekistan" },
  { code: "VE", dial: "+58", flag: "\uD83C\uDDFB\uD83C\uDDEA", name: "Venezuela" },
  { code: "VN", dial: "+84", flag: "\uD83C\uDDFB\uD83C\uDDF3", name: "Vietnam" },
];

const allDialCodes = new Set(countryCodes.map((c) => c.dial));

interface CountryCodeSelectorProps {
  selected: CountryCode;
  onSelect: (country: CountryCode) => void;
  error?: boolean;
}

export function CountryCodeSelector({
  selected,
  onSelect,
  error,
}: CountryCodeSelectorProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [highlightIndex, setHighlightIndex] = useState(0);

  const filtered = search.trim()
    ? countryCodes.filter((c) => {
        const q = search.toLowerCase().replace(/^\+/, "");
        return (
          c.name.toLowerCase().includes(q) ||
          c.dial.includes(q) ||
          c.dial.replace("+", "").startsWith(q) ||
          c.code.toLowerCase().includes(q)
        );
      })
    : countryCodes;

  const openDropdown = useCallback(() => {
    setOpen(true);
    setSearch("");
    setHighlightIndex(0);
    requestAnimationFrame(() => inputRef.current?.focus());
  }, []);

  const closeDropdown = useCallback(() => {
    setOpen(false);
    setSearch("");
  }, []);

  const selectCountry = useCallback(
    (country: CountryCode) => {
      onSelect(country);
      closeDropdown();
    },
    [onSelect, closeDropdown]
  );

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handle = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [open, closeDropdown]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDropdown();
    };
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [open, closeDropdown]);

  // Scroll highlighted item into view
  useEffect(() => {
    if (!open || !listRef.current) return;
    const item = listRef.current.children[highlightIndex] as HTMLElement;
    if (item) item.scrollIntoView({ block: "nearest" });
  }, [highlightIndex, open]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[highlightIndex]) selectCountry(filtered[highlightIndex]);
    }
  };

  return (
    <div ref={containerRef} className="shrink-0">
      <button
        type="button"
        onClick={() => (open ? closeDropdown() : openDropdown())}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Country code: ${selected.name} ${selected.dial}`}
        className={`h-[45.5px] bg-[rgba(252,252,252,0.03)] border ${
          error
            ? "border-[#F87171]"
            : "border-[rgba(129,106,84,0.4)]"
        } border-r-0 rounded-l-[2px] flex items-center gap-1.5 px-3 cursor-pointer hover:bg-[rgba(252,252,252,0.05)] transition-colors outline-none focus-visible:ring-1 focus-visible:ring-[#A08567]`}
      >
        <span className="text-[13px]" aria-hidden="true">
          {selected.flag}
        </span>
        <span className="font-['Inter',sans-serif] font-light text-[13px] text-[#8d8d8d]">
          {selected.dial}
        </span>
        <ChevronDown
          size={12}
          className={`text-[#878787] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 z-50 w-full sm:w-[280px] bg-[#211919] border border-[rgba(255,255,255,0.1)] rounded-[4px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Search input */}
          <div className="p-2 border-b border-[rgba(255,255,255,0.06)]">
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setHighlightIndex(0);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Search country or code..."
              className="w-full h-[36px] bg-[rgba(252,252,252,0.04)] rounded-[2px] border border-[rgba(255,255,255,0.08)] px-3 font-['Inter',sans-serif] font-light text-[12px] text-[#fcfcfc] placeholder:text-[rgba(252,252,252,0.3)] outline-none focus-visible:border-[#A08567]"
              aria-label="Search countries"
            />
          </div>

          {/* Country list */}
          <ul
            ref={listRef}
            role="listbox"
            aria-label="Country codes"
            className="max-h-[220px] overflow-y-auto overscroll-contain"
          >
            {filtered.length === 0 ? (
              <li className="px-3 py-4 text-center">
                <p className="font-['Inter',sans-serif] font-light text-[12px] text-[#F87171]">
                  No matching country found
                </p>
              </li>
            ) : (
              filtered.map((country, i) => (
                <li
                  key={country.code}
                  role="option"
                  aria-selected={country.code === selected.code}
                  onClick={() => selectCountry(country)}
                  onMouseEnter={() => setHighlightIndex(i)}
                  className={`flex items-center gap-3 px-3 py-2.5 cursor-pointer transition-colors ${
                    i === highlightIndex
                      ? "bg-[rgba(160,133,103,0.12)]"
                      : "hover:bg-[rgba(252,252,252,0.04)]"
                  } ${
                    country.code === selected.code
                      ? "border-l-2 border-[#A08567]"
                      : "border-l-2 border-transparent"
                  }`}
                >
                  <span className="text-[14px]" aria-hidden="true">
                    {country.flag}
                  </span>
                  <span className="font-['Inter',sans-serif] font-light text-[12px] text-[#fcfcfc] flex-1 truncate">
                    {country.name}
                  </span>
                  <span className="font-['Inter',sans-serif] font-light text-[12px] text-[#878787] tabular-nums">
                    {country.dial}
                  </span>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export function isValidCountryDial(dial: string): boolean {
  return allDialCodes.has(dial);
}
