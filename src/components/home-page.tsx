import { Link } from "@tanstack/react-router";
import { FeaturedShot, ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import {
  capabilities,
  education,
  hero,
  process,
  projects,
  services,
  site,
  skillLabels,
  skills,
  templateNote,
  templates,
  ui,
} from "@/lib/content";
import { useLang } from "@/lib/language";
import { GH, Sms, Wpp } from "./icons/icons";

const homeTemplates = templates.filter((item) => !item.featured);

export function HomePage() {
  const { t } = useLang();
  const mailHref = `mailto:${site.email}`;
  const waHref = `https://wa.me/${site.whatsapp}`;

  return (
    <main className="mx-auto w-full max-w-5xl px-5 pb-24 pt-10 sm:px-8 lg:px-12 lg:pt-16">
      <section id="inicio" className="scroll-mt-24 border-b border-line pb-16 lg:scroll-mt-8 lg:pb-24">
        <h1 className="reveal reveal-d1 font-['Sora'] text-[clamp(3rem,16vw,8.5rem)] leading-[0.88] tracking-[-0.045em] text-fg">
          <span className="block">{site.firstName}</span>
          <span className="block">{site.lastName}</span>
        </h1>

        <p className="rise delay-1 mt-6 text-sm text-fg md:text-base">{t(hero.role)}</p>

        <p className="rise delay-2 mt-5 max-w-xl text-pretty text-sm leading-relaxed text-muted md:text-base">
          <span className="font-medium text-fg">{t(hero.role)}. </span>
          {t(hero.bio)}
        </p>

        <div className="rise delay-3 mt-8 flex flex-wrap items-center gap-2">
          <Button
            asChild
            className="min-h-10 pl-4 pr-4 sm:pl-5 sm:pr-4"
          >
            <a href={mailHref}>
              <Sms className="size-4" />
              {t(hero.write)}
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="group relative h-10 w-10 justify-start overflow-hidden p-0 text-fg transition-all duration-300 hover:w-[130px] hover:bg-line"
          >
            <a href={site.github} target="_blank" rel="noreferrer">
              <span className="flex size-10 shrink-0 items-center justify-center">
                <GH className="size-5" />
              </span>

              <span className="hidden whitespace-nowrap pr-3 text-sm opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block -translate-x-2">
                GitHub
              </span>
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="group relative h-10 w-10 justify-start overflow-hidden p-0 text-fg transition-all duration-300 hover:w-[130px] hover:bg-line"
          >
            <a href={waHref} target="_blank" rel="noreferrer">
              <span className="flex size-10 shrink-0 items-center justify-center">
                <Wpp className="size-5" />
              </span>

              <span className="hidden whitespace-nowrap pr-3 text-sm opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block -translate-x-2">
                WhatsApp
              </span>
            </a>
          </Button>
        </div>
      </section>



      <section id="plantillas" className="scroll-mt-24 border-b border-line py-16 lg:scroll-mt-8 lg:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            number="03"
            kicker={t(ui.templatesKicker)}
            title={t(ui.templatesTitle)}
            className="mb-0"
          />
          <Button asChild variant="ghost" size="sm">
            <Link to="/plantillas">{t(ui.viewAll)}</Link>
          </Button>
        </div>

        <p className="-mt-4 mb-10 max-w-xl text-sm text-muted">
          {t(ui.templatesLead)}
        </p>

        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0">
          {homeTemplates.map((item) => (
            <ProjectCard key={item.id} project={item} />
          ))}
        </div>

        <p className="mt-8 text-xs text-subtle">{t(templateNote)}</p>
      </section>

      <section id="servicios" className="scroll-mt-24 border-b border-line py-16 lg:scroll-mt-8 lg:py-24">
        <SectionHeading
          number="04"
          kicker={t(ui.servicesKicker)}
          title={t(ui.servicesTitle)}
        />
        <p className="-mt-6 mb-10 max-w-xl text-sm text-muted">
          {t(ui.servicesLead)}
        </p>

        <ul>
          {services.map((item) => (
            <li
              key={item.number}
              className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-line py-5 last:border-b md:grid-cols-[2.5rem_11rem_1fr] md:gap-8"
            >
              <span className="pt-0.5 text-kicker tracking-kicker text-subtle">
                {item.number}
              </span>
              <h3 className="text-sm font-medium text-fg">{t(item.title)}</h3>
              <p className="col-span-2 text-sm leading-relaxed text-muted md:col-span-1">
                {t(item.description)}
              </p>
            </li>
          ))}
        </ul>

        <h3 className="mt-16 mb-6 font-display text-2xl italic tracking-display text-fg">
          {t(ui.solutions)}
        </h3>
        <div className="grid gap-px overflow-hidden rounded-lg bg-line sm:grid-cols-2">
          {capabilities.map((item) => (
            <div key={t(item.title)} className="bg-bg p-5">
              <h4 className="text-sm font-medium text-fg">{t(item.title)}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {t(item.description)}
              </p>
            </div>
          ))}
        </div>

        <h3 className="mt-16 mb-6 font-display text-2xl italic tracking-display text-fg">
          {t(ui.process)}
        </h3>
        <ol>
          {process.map((item) => (
            <li
              key={item.number}
              className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-line py-5 last:border-b md:grid-cols-[2.5rem_11rem_1fr] md:gap-8"
            >
              <span className="pt-0.5 text-kicker tracking-kicker text-subtle">
                {item.number}
              </span>
              <h4 className="text-sm font-medium text-fg">{t(item.title)}</h4>
              <p className="col-span-2 text-sm text-muted md:col-span-1">
                {t(item.description)}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section id="educacion" className="scroll-mt-24 border-b border-line py-16 lg:scroll-mt-8 lg:py-24">
        <SectionHeading
          number="05"
          kicker={t(ui.educationKicker)}
          title={t(ui.educationTitle)}
        />
        <ul>
          {education.map((item) => (
            <li
              key={item.number}
              className="flex flex-col gap-2 border-t border-b border-line py-6 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div className="flex gap-6">
                <span className="text-kicker tracking-kicker text-subtle">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-sm font-medium text-fg">{t(item.title)}</h3>
                  <p className="mt-1 text-sm text-muted">{t(item.place)}</p>
                </div>
              </div>
              <span className="pl-11 text-sm text-subtle sm:pl-0">
                {t(item.date)}
              </span>
            </li>
          ))}
        </ul>
      </section>



      <section id="contacto" className="scroll-mt-24 py-16 lg:scroll-mt-8 lg:py-24">
        <SectionHeading
          number="07"
          kicker={t(ui.contactKicker)}
          title={t(ui.contactTitle)}
        />
        <a
          href={mailHref}
          className="text-sm text-fg transition-opacity duration-150 hover:opacity-70"
        >
          {site.email}
        </a>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <Button
            asChild
            className="min-h-10 pl-4 pr-4 sm:pl-5 sm:pr-4"
          >
            <a href={mailHref}>
              <Sms className="size-4" />
              {t(hero.write)}
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="group relative h-10 w-10 justify-start overflow-hidden p-0 text-fg transition-all duration-300 hover:w-[130px] hover:bg-line"
          >
            <a href={site.github} target="_blank" rel="noreferrer">
              <span className="flex size-10 shrink-0 items-center justify-center">
                <GH className="size-5" />
              </span>

              <span className="hidden whitespace-nowrap pr-3 text-sm opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block -translate-x-2">
                GitHub
              </span>
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="group relative h-10 w-10 justify-start overflow-hidden p-0 text-fg transition-all duration-300 hover:w-[130px] hover:bg-line"
          >
            <a href={waHref} target="_blank" rel="noreferrer">
              <span className="flex size-10 shrink-0 items-center justify-center">
                <Wpp className="size-5" />
              </span>

              <span className="hidden whitespace-nowrap pr-3 text-sm opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block -translate-x-2">
                WhatsApp
              </span>
            </a>
          </Button>
        </div>
      </section>

      <footer className="flex flex-col gap-2 border-t border-line pt-6 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
        <span>
          {t(ui.footerLang)} · {t(site.location)}
        </span>
      </footer>
    </main>
  );
}
