import { Link } from "@tanstack/react-router";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { templateNote, templates, ui } from "@/lib/content";
import { useLang } from "@/lib/language";

export function TemplatesPage() {
  const { t } = useLang();

  return (
    <main className="mx-auto w-full max-w-5xl px-5 pb-24 pt-10 sm:px-8 lg:px-12 lg:pt-16">
      <Button asChild variant="ghost" size="sm" className="-ml-2 mb-8">
        <Link to="/">
          {t(ui.back)}
        </Link>
      </Button>

      <p className="mb-3 font-sans text-kicker font-medium uppercase tracking-kicker text-subtle">
        03 — {t(ui.templatesKicker)}
      </p>
      <h1 className="font-display text-section italic leading-none tracking-display text-fg text-balance">
        {t(ui.allTemplates)}
      </h1>
      <p className="mt-5 max-w-xl text-sm text-muted">{t(ui.templatesLead)}</p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {templates.map((item) => (
          <ProjectCard key={item.id} project={item} />
        ))}
      </div>

      <p className="mt-10 text-xs text-subtle">{t(templateNote)}</p>
    </main>
  );
}
