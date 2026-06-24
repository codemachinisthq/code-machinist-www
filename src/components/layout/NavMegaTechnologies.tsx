import Link from "next/link";
import { TECH_CATEGORIES } from "@/lib/constants";

// Pair the 6 categories into 3 columns: [Mobile+Web], [Backend+Database], [Cloud+AI]
const COLUMN_PAIRS = [
  [0, 1],
  [2, 3],
  [4, 5],
] as const;

export function NavMegaTechnologies() {
  return (
    <div className="w-170">
      <div className="border-b border-bg-border px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted">
          Our tech stack
        </p>
      </div>

      <div className="grid grid-cols-3 divide-x divide-bg-border p-2">
        {COLUMN_PAIRS.map((pair, gi) => (
          <div key={gi} className="space-y-4 px-4 py-2">
            {pair.map((catIdx, ci) => {
              const cat = TECH_CATEGORIES[catIdx];
              return (
                <div key={cat.label} className={ci > 0 ? "border-t border-bg-border pt-4" : ""}>
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-brand-blue">
                    {cat.label}
                  </p>
                  <ul className="space-y-0.5">
                    {cat.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="flex items-center gap-2 rounded-md px-1.5 py-1 text-xs text-text-secondary transition-colors hover:bg-bg-elevated hover:text-text-primary"
                        >
                          <span className="size-1 rounded-full bg-bg-border shrink-0" />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="border-t border-bg-border mx-2 px-2 py-2.5">
        <p className="text-xs text-text-muted">
          30+ technologies across mobile, web, cloud, and AI
        </p>
      </div>
    </div>
  );
}
