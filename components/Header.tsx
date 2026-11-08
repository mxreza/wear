"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { brand, cta, nav } from "@/content/site";
import Monogram from "./Monogram";

/**
 * Transparent over the hero; paper + soft shadow after scrolling. Hides on scroll down, returns on scroll up.
 * A gold dot slides under the nav link of the section in view. Below 1024px the nav becomes a menu panel.
 * On sub-pages (`home={false}`) links point back to the home page sections, except #contact (on every page).
 */
export default function Header({ home = true }: { home?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  // Scroll state
  useEffect(() => {
    let last = window.scrollY;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 16);
        if (Math.abs(y - last) > 6) setHidden(y > last && y > 240);
        last = y;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  const hrefFor = (href: string) => (home || href === "#contact" ? href : `/${href}`);

  // Active section (home page only)
  useEffect(() => {
    if (!home) return;
    const ids = nav.map((n) => n.href.slice(1));
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    // Track every nav section crossing the middle band of the viewport; none → no active link.
    const visible = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id)));
        setActive(ids.find((id) => visible.has(id)) ?? null);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [home]);

  // Move the gold dot under the active link
  const placeDot = useCallback(() => {
    const navEl = navRef.current;
    const dot = dotRef.current;
    if (!navEl || !dot) return;
    const link = active ? navEl.querySelector<HTMLElement>(`a[href="#${active}"]`) : null;
    if (!link) { dot.style.opacity = "0"; return; }
    const n = navEl.getBoundingClientRect();
    const l = link.getBoundingClientRect();
    const fromRight = n.right - (l.left + l.width / 2) - 2.5;
    dot.style.transform = `translateX(${-fromRight}px)`;
    dot.style.opacity = "1";
  }, [active]);
  useLayoutEffect(() => { placeDot(); }, [placeDot]);
  useEffect(() => {
    window.addEventListener("resize", placeDot);
    document.fonts?.ready.then(placeDot);
    return () => window.removeEventListener("resize", placeDot);
  }, [placeDot]);

  // Menu: close on Escape / link click
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); btnRef.current?.focus(); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const cls = ["header", scrolled && "is-scrolled", hidden && !open && "is-hidden", open && "is-open"].filter(Boolean).join(" ");

  return (
    <header className={cls}>
      <div className="container header-inner">
        <a href={home ? "#top" : "/"} className="wordmark" aria-label={brand.fullName}>
          <Monogram />
          <span className="wordmark-name">{brand.name}</span>
        </a>
        <button
          ref={btnRef}
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span>{open ? "بستن" : "منو"}</span>
          <span className="menu-icon" aria-hidden="true" />
        </button>
        <nav id="site-nav" ref={navRef} className="nav" aria-label="منوی اصلی">
          {nav.map((item) => (
            <a
              key={item.href}
              className="nav-link"
              href={hrefFor(item.href)}
              aria-current={active === item.href.slice(1) ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <span ref={dotRef} className="nav-dot" aria-hidden="true" />
          <a className="btn btn-primary nav-cta" href="#contact" onClick={() => setOpen(false)}>{cta.primary}</a>
        </nav>
      </div>
    </header>
  );
}
