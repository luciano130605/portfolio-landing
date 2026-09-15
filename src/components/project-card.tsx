import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/language";
import { ui, type Project } from "@/lib/content";
import { Internet } from "./icons/icons";

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const { t } = useLang();

  return (
    <article
      className="w-[88vw] shrink-0 snap-center overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-border)] sm:w-auto sm:shrink lg:rounded-3xl"
    >
      {project.image && (
        <div className="aspect-video w-full overflow-hidden bg-elevated">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="p-5 text-center sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle sm:text-xs">
            {t(project.category)}
          </p>

        </div>

        <h3 className="mt-3 break-words font-display text-3xl tracking-tight text-fg sm:text-4xl lg:text-5xl">
          {project.title}
        </h3>

       
        {
          (project.live) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              {project.live && (
                <Button asChild variant="primary" className="w-full px-5 sm:w-auto">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <Internet className="size-4" size={18} />
                    {t(ui.web)}

                  </a>
                </Button>
              )}

            </div>
          )
        }
      </div >
    </article >
  );
}

export function FeaturedShot({
  project,
  href,
}: {
  project: Pick<Project, "image" | "title">;
  href?: string;
}) {
  const inner = (
    <div className="overflow-hidden rounded-xl bg-card shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 ease-soft hover:-translate-y-0.5 hover:shadow-[var(--shadow-border-hover)]">
      <img
        src={project.image}
        alt={project.title}
        className="aspect-photo w-full object-cover object-top outline outline-1 -outline-offset-1 outline-white/10"
      />
    </div>
  );

  if (!href) return inner;

  return (
    <a href={href} className="block">
      {inner}
    </a>
  );
}