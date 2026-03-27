import { MapPin, Download, Mail, BarChart3, Wrench, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const kpis = [
  { icon: BarChart3, value: "4+", label: "Projects" },
  { icon: Wrench, value: "8+", label: "Tools" },
  { icon: Briefcase, value: "1+", label: "Year Exp." },
];

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Grid pattern bg */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground mb-6 animate-fade-in">
          <MapPin className="h-3.5 w-3.5" /> Kalyan, India
        </div>

        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl animate-fade-up">
          Prathamesh Gite
        </h1>
        <p className="mt-2 font-display text-xl font-medium text-primary sm:text-2xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Data Analyst
        </p>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Turning Data into Actionable Insights
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button size="lg" className="gap-2" asChild>
            <a href="/resume.pdf" download>
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href="#contact">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {kpis.map((kpi) => (
            <div key={kpi.label} className="rounded-xl border border-border bg-card p-4 text-center shadow-sm">
              <kpi.icon className="mx-auto h-5 w-5 text-primary mb-2" />
              <p className="font-display text-2xl font-bold text-foreground">{kpi.value}</p>
              <p className="text-xs text-muted-foreground">{kpi.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
