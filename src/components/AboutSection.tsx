import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, TrendingUp, BarChart2 } from "lucide-react";

const highlights = [
  { icon: BarChart2, title: "Data Cleaning & EDA", desc: "Transforming messy datasets into structured, analysis-ready data" },
  { icon: TrendingUp, title: "Dashboard Design", desc: "Building interactive dashboards that drive business decisions" },
  { icon: Target, title: "Data Storytelling", desc: "Translating complex findings into clear, actionable narratives" },
];

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 px-4" ref={ref}>
      <div className={`mx-auto max-w-6xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">About Me</p>
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Passionate about uncovering insights
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              I am a Data Analyst with strong skills in Python, SQL, and Power BI. I specialize in data cleaning, exploratory data analysis (EDA), and building interactive dashboards that deliver business insights.
            </p>
            <p>
              I enjoy transforming raw data into meaningful stories that help in decision-making. My approach focuses on understanding business problems first, then leveraging data to provide actionable solutions.
            </p>
          </div>

          <div className="grid gap-4">
            {highlights.map((h) => (
              <div key={h.title} className="flex gap-4 rounded-xl border border-border bg-card p-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <h.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">{h.title}</p>
                  <p className="text-sm text-muted-foreground">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
