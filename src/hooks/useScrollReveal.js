import { useEffect } from 'react';

export function useScrollReveal(selector = '[data-reveal]') {
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -24px 0px' }
    );

    const observeRevealElements = () => {
      document.querySelectorAll(selector).forEach(element => {
        if (element.classList.contains('is-visible')) return;
        revealObserver.observe(element);
      });
    };

    observeRevealElements();

    const mutationObserver = new MutationObserver(observeRevealElements);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [selector]);
}
