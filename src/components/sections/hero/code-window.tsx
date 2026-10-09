import { profile } from "@/data/portfolio";

/** A small, hand-highlighted code snippet — decorative, so hidden from assistive tech. */
const k = "text-[#c678dd] dark:text-[#c792ea]"; // keyword
const p = "text-[#0e7490] dark:text-[#89ddff]"; // property
const s = "text-[#15803d] dark:text-[#c3e88d]"; // string
const c = "text-muted-foreground/70 italic"; // comment
const f = "text-[#1d4ed8] dark:text-[#82aaff]"; // function

const lines: React.ReactNode[] = [
  <span key="c" className={c}>{"// engineer.ts"}</span>,
  <>
    <span className={k}>const</span> engineer = {"{"}
  </>,
  <>
    {"  "}<span className={p}>name</span>: <span className={s}>&quot;{profile.name}&quot;</span>,
  </>,
  <>
    {"  "}<span className={p}>role</span>: <span className={s}>&quot;Software Engineer @ ISH&quot;</span>,
  </>,
  <>
    {"  "}<span className={p}>stack</span>: [<span className={s}>&quot;Next.js&quot;</span>, <span className={s}>&quot;Node.js&quot;</span>, <span className={s}>&quot;Postgres&quot;</span>],
  </>,
  <>
    {"  "}<span className={p}>mobile</span>: <span className={s}>&quot;Flutter&quot;</span>,
  </>,
  <>
    {"  "}<span className={p}>shipped</span>: <span className={s}>&quot;Imtihan.app&quot;</span>,
  </>,
  <>
    {"  "}<span className={p}>based</span>: <span className={s}>&quot;Lahore, PK&quot;</span>,
  </>,
  <>{"};"}</>,
  <>&nbsp;</>,
  <>
    engineer.<span className={f}>build</span>(<span className={s}>&quot;your next product&quot;</span>);
  </>,
];

export function CodeWindow() {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden rounded-2xl border border-border bg-card/80 shadow-2xl shadow-black/20 backdrop-blur-xl"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">engineer.ts</span>
      </div>
      <pre className="overflow-hidden p-4 font-mono text-[12.5px] leading-6 sm:p-5 sm:text-[13px]">
        <code>
          {lines.map((line, i) => (
            <span key={i} className="flex">
              <span className="mr-4 w-5 shrink-0 text-right text-muted-foreground/40 select-none">
                {i + 1}
              </span>
              <span className="whitespace-pre">{line}</span>
            </span>
          ))}
          <span className="flex">
            <span className="mr-4 w-5 shrink-0 text-right text-muted-foreground/40">{lines.length + 1}</span>
            <span className="inline-block h-5 w-2 translate-y-0.5 animate-pulse bg-brand" />
          </span>
        </code>
      </pre>
    </div>
  );
}
