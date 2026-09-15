import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nav, site } from "@/lib/content";
import { useLang } from "@/lib/language";
import { cn } from "@/lib/utils";

const SECTION_IDS = nav.map((item) => item.id);

export function SiteShell({ children }: { children: ReactNode }) {
  const { t, lang, toggle } = useLang();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;

    const elements = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visible[0]?.target.id;
        if (id) setActive(id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-56 flex-col border-r border-line bg-bg px-6 py-7 lg:flex">
        <Link to="/" className="text-sm tracking-tight text-fg">
          {site.name}
        </Link>

        <NavList
          active={pathname === "/" ? active : ""}
          t={t}
          onNavigate={() => setOpen(false)}
        />

        <div className="mt-auto flex items-center gap-3 pb-1">
          <button
            type="button"
            onClick={toggle}
            className="text-xs tracking-kicker text-subtle uppercase transition-colors duration-150 hover:text-fg"
            aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
        </div>
      </aside>

      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-line bg-bg/90 px-4 py-3 backdrop-blur-md lg:hidden">
        <Link to="/" className="text-sm text-fg">
          {site.name}
        </Link>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggle}
            className="flex size-11 items-center justify-center text-xs tracking-kicker text-subtle uppercase"
            aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <Button
            variant="ghost"
            size="icon"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-30 bg-bg pt-16 lg:hidden">
          <NavList
            active={pathname === "/" ? active : ""}
            t={t}
            onNavigate={() => setOpen(false)}
            className="px-6 py-8"
          />
        </div>
      )}

      <div className="lg:pl-56">{children}</div>
    </div>
  );
}

function NavList({
  active,
  t,
  onNavigate,
  className,
}: {
  active: string;
  t: (value: { es: string; en: string } | string) => string;
  onNavigate: () => void;
  className?: string;
}) {
  return (
    <nav className={cn("mt-16 flex flex-col gap-4", className)}>
      {nav.map((item) => {
        const isActive = active === item.id;
        return (
          <Link
            key={item.id}
            to="/"
            hash={item.id}
            onClick={onNavigate}
            className={cn(
              "group flex items-baseline gap-3 text-sm transition-colors duration-150",
              isActive ? "text-fg" : "text-subtle hover:text-muted",
            )}
          >
            <span className="w-5 font-sans text-kicker tracking-kicker">
              {item.number}
            </span>
            <span>{t(item.label)}</span>
          </Link>
        );
      })}
    </nav>
  );
}
