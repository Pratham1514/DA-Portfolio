import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Briefcase, GraduationCap, Brain } from "lucide-react";

const timeline = [
  {
    icon: Brain,
    title: "Data Analytics Certification",
    org: "Fortune Cloud Technologies",
    period: "Nov, 2025 – Present",
    description:
      "Currently learning advanced data analysis concepts including data cleaning, exploratory data analysis (EDA), SQL, and Power BI dashboarding. Working on real-world datasets to build analytical thinking and business insights.",
  },
  {
    icon: Briefcase,
    title: "Software Engineer",
    org: "Lionbridge Technologies",
    period: "Sept, 2024 – Present",
    description:
      "Contributing to data-related workflows including data validation, quality analysis, and reporting. Applying analytical skills to support AI/ML data pipelines and ensure data accuracy across projects.",
  },
  {
    icon: GraduationCap,
    title: "B.Sc. in Information Technology",
    org: "University of Mumbai",
    period: "2020 – 2023",
    description:
      "Completed undergraduate degree with focus on databases, programming, and data structures. Developed foundational skills in data analysis and visualization through academic projects.",
  },
];

export function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 px-4 bg-muted/30" ref={ref}>
      <div className={`mx-auto max-w-3xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">Experience & Education</p>
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          My Journey
        </h2>

        <div className="mt-10 relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {timeline.map((item) => (
              <div key={item.title} className="relative pl-14">
                <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-sm">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-primary">{item.org}</p>
                    </div>
                    <span className="rounded-full border border-border bg-muted px-3 py-0.5 text-xs font-medium text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
