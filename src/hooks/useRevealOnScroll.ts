import { useLayoutEffect, useRef } from 'react';

const STAGGER_MS = 90;
const FIRST_BATCH_DELAY_MS = 250;
const REVEAL_DURATION_MS = 600;

/**
 * Reveals the direct children of the returned element with a staggered
 * fade-in-up as they scroll into view.
 */
export function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const container = ref.current;
    if (!container || !('IntersectionObserver' in window)) return;

    const items = Array.from(container.children) as HTMLElement[];
    const timers: number[] = [];
    let isFirstBatch = true;

    items.forEach((item) => item.classList.add('reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        const entering = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target as HTMLElement)
          .sort((a, b) => items.indexOf(a) - items.indexOf(b));

        if (entering.length === 0) return;

        const baseDelay = isFirstBatch ? FIRST_BATCH_DELAY_MS : 0;
        isFirstBatch = false;

        entering.forEach((item, index) => {
          const delay = baseDelay + index * STAGGER_MS;
          observer.unobserve(item);
          item.style.transitionDelay = `${delay}ms`;
          item.classList.add('reveal--visible');

          timers.push(
            window.setTimeout(() => {
              item.classList.remove('reveal', 'reveal--visible');
              item.style.transitionDelay = '';
            }, delay + REVEAL_DURATION_MS)
          );
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
      items.forEach((item) => {
        item.classList.remove('reveal', 'reveal--visible');
        item.style.transitionDelay = '';
      });
    };
  }, []);

  return ref;
}
