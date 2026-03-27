import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { FileBarChart, Ship, MessageSquareWarning, ShieldAlert } from "lucide-react";

const projects = [
  {
    icon: FileBarChart,
    title: "Netflix Content Analysis Dashboard",
    status: "In Progress" as const,
    kpi: "8,800+ records analyzed",
    insights: [
      "Identified trends in genres, content growth, and country-wise distribution",
      "Revealed shifting content strategy from movies to series post-2018",
      "Built interactive Power BI dashboard for stakeholder exploration",
    ],
    tools: ["Power BI", "Python", "Pandas"],
  },
  {
    icon: Ship,
    title: "Titanic Survival Analysis Dashboard",
    status: "Completed" as const,
    kpi: "891 passenger records",
    insights: [
      "Discovered survival patterns based on gender, class, and age groups",
      "Women and children had 3x higher survival rate than adult males",
      "Visualized key findings through interactive Power BI reports",
    ],
    tools: ["Power BI", "Python", "Data Cleaning"],
  },
  {
    icon: MessageSquareWarning,
    title: "Customer Complaints Analysis Dashboard",
    status: "Completed" as const,
    kpi: "KPI-driven dashboard",
    insights: [
      "Identified top complaint types and high-risk cities",
      "Created metrics like total complaints, resolution rate, and trend analysis",
      "Built dynamic dashboard with filters for actionable business decisions",
    ],
    tools: ["Power BI", "Excel", "KPI Design"],
  },
  {
    icon: ShieldAlert,
    title: "Fraud Detection Analysis",
    status: "In Progress" as const,
    kpi: "Anomaly detection focus",
    insights: [
      "Working on identifying fraudulent transactions using data analysis techniques",
      "Focus on anomaly detection and pattern recognition across transaction data",
    ],
    tools: ["Python", "Pandas", "EDA"],
  },
];

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 px-4" ref={ref}>
      <div className={`mx-auto max-w-6xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">Projects</p>
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Case Studies
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <p.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground leading-tight">{p.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{p.kpi}</p>
                  </div>
                </div>
                <Badge
                  variant={p.status === "Completed" ? "default" : "secondary"}
                  className="shrink-0 text-[10px]"
                >
                  {p.status}
                </Badge>
              </div>

              <ul className="space-y-2 mb-4">
                {p.insights.map((ins, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    {ins}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {p.tools.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                    {t}
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
