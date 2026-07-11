import { useEffect, useRef } from "react";

export default function useCardAnimation() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);

    // Browser doesn't support IntersectionObserver
    if (!("IntersectionObserver" in window)) {
      cards.forEach((card) => card.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const currentCard = entry.target;
          const index = cards.indexOf(currentCard);

          setTimeout(() => {
            currentCard.classList.add("is-visible");
          }, index * 70);

          observer.unobserve(currentCard);
        });
      },
      {
        threshold: 0.15,
      },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return cardRefs;
}
