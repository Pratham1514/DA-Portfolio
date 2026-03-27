import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2, BarChart3, Database, Wrench, Lightbulb } from "lucide-react";

const categories = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["Python", "Pandas", "NumPy", "Dax"],

  },
  {
    icon: BarChart3,
    title: "Visualization",
    skills: ["Power BI", "Matplotlib", "Seaborn", "Tableau"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["SQL"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Excel", "Git", "GitHub", "VS Code", "AI Tools (ChatGPT, Gemini)", "Jupyter Notebook "],
  },
  {
    icon: Lightbulb,
    title: "Concepts",
    skills: ["Data Cleaning", "EDA", "KPI Design", "Data Storytelling", "Data Modeling", "ETL"],

  },
];

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 px-4 bg-muted/30" ref={ref}>
      <div className={`mx-auto max-w-6xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">Skills</p>
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Technical Toolkit
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <cat.icon className="h-4.5 w-4.5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
