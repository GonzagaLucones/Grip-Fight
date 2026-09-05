import { useEffect } from "react";

export const trackEvent = (event, params = {}) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
  if (typeof window.gtag === "function") window.gtag("event", event, params);
};

export const usePageView = () => {
  useEffect(() => {
    trackEvent("page_view");
  }, []);
};

export const useScrollDepth = () => {
  useEffect(() => {
    const thresholds = [25, 50, 75, 90];
    const fired = new Set();
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const pct = Math.round((window.scrollY / max) * 100);
      thresholds.forEach((t) => {
        if (pct >= t && !fired.has(t)) {
          fired.add(t);
          trackEvent(`scroll_${t}`);
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
};
