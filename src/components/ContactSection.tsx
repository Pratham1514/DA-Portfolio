import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    // e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-4" ref={ref}>
      <div className={`mx-auto max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">Contact</p>
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Let's Connect
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <form action="https://formspree.io/f/xovajvkz"
            method="POST" className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name" name="name" required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email" name="email" required
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message" name="message" required
                placeholder="Your message..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                rows={5}
                className="mt-1.5"
              />
            </div>
            <Button type="submit" className="gap-2">
              <Send className="h-4 w-4" /> Send Message
            </Button>
          </form>

          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Kalyan, Maharashtra, India</span>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="https://github.com/Pratham1514" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="https://www.linkedin.com/in/prathamesh-gite-927949383" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              I'm open to data analyst opportunities and collaborations. Feel free to reach out — I'd love to hear from you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
