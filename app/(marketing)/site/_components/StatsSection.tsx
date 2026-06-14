// Reusable "By the Numbers" stats band. The count-up animation is driven by
// SiteInteractions (it animates any [data-target] in view).

const STATS = [
  { target: 2, suffix: "", label: "Global locations" },
  { target: 500, suffix: "+", label: "Consultants hired" },
  { target: 60, suffix: "+", label: "Projects delivered" },
];

export default function StatsSection({ flush = false }: { flush?: boolean }) {
  return (
    <section className="section stats" style={flush ? { paddingTop: 0 } : undefined}>
      <div className="wrap stats-grid">
        <div className="stats-intro reveal">
          <span className="eyebrow"><span className="tick"></span>By the Numbers</span>
          <h2 style={{ marginTop: 14 }}>Synergy, measured.</h2>
          <p>A quick snapshot of the reach and momentum behind every engagement.</p>
        </div>
        {STATS.map((s, i) => (
          <div className={`stat reveal d${i + 1}`} key={s.label}>
            <div className="num">
              <span data-target={s.target}>0</span>
              {s.suffix && <span className="suf">{s.suffix}</span>}
            </div>
            <div className="lbl">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
