"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SiteInteractions() {
  const pathname = usePathname();

  useEffect(() => {
    // close mobile menu on navigation
    document.body.classList.remove("menu-open");

    const header = document.querySelector(".header");
    const onScroll = () => {
      if (!header) return;
      if (window.scrollY > 12) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // hamburger / mobile menu
    const burger = document.querySelector<HTMLButtonElement>(".hamburger");
    const onBurger = () => {
      const open = document.body.classList.toggle("menu-open");
      burger?.setAttribute("aria-expanded", String(open));
    };
    burger?.addEventListener("click", onBurger);
    const panelLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".mobile-panel a")
    );
    const closeMenu = () => document.body.classList.remove("menu-open");
    panelLinks.forEach((a) => a.addEventListener("click", closeMenu));

    // scroll reveal
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const show = (el: Element) => el.classList.add("in");
    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              show(e.target);
              io?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
      );
      reveals.forEach((el) => io!.observe(el));
    }
    const inView = (el: Element) => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return r.top < vh * 0.92 && r.bottom > 0;
    };
    const sweep = () =>
      reveals.forEach((el) => {
        if (!el.classList.contains("in") && inView(el)) {
          show(el);
          io?.unobserve(el);
        }
      });
    requestAnimationFrame(sweep);
    window.addEventListener("scroll", sweep, { passive: true });
    const failsafe = setTimeout(() => reveals.forEach(show), 1400);

    // count-up stats
    const counts = Array.from(
      document.querySelectorAll<HTMLElement>("[data-target]")
    );
    const done: Element[] = [];
    const animate = (el: HTMLElement) => {
      const target = parseFloat(el.getAttribute("data-target") || "0");
      const dur = 1600;
      let start: number | null = null;
      const step = (ts: number) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(eased * target).toLocaleString();
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target.toLocaleString();
      };
      requestAnimationFrame(step);
    };
    let statIO: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      statIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting && done.indexOf(e.target) === -1) {
              done.push(e.target);
              animate(e.target as HTMLElement);
              statIO?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      counts.forEach((el) => statIO!.observe(el));
    }
    const statFailsafe = setTimeout(() => {
      counts.forEach((el) => {
        if (done.indexOf(el) === -1) {
          done.push(el);
          el.textContent = parseFloat(
            el.getAttribute("data-target") || "0"
          ).toLocaleString();
        }
      });
    }, 2600);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", sweep);
      burger?.removeEventListener("click", onBurger);
      panelLinks.forEach((a) => a.removeEventListener("click", closeMenu));
      io?.disconnect();
      statIO?.disconnect();
      clearTimeout(failsafe);
      clearTimeout(statFailsafe);
    };
  }, [pathname]);

  return null;
}
