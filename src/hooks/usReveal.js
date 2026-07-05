import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref's DOM node.
 * When the node (or any of its descendants carrying the `.fi` class)
 * scrolls into view, `.vis` is added to trigger the fade/slide-in
 * transition defined in index.css. Any `.sk-fill` skill bars found
 * inside are also animated to their target width.
 */
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vis");
            entry.target.querySelectorAll(".sk-fill").forEach((bar) => {
              setTimeout(() => {
                bar.style.width = `${bar.dataset.w}%`;
              }, 350);
            });
          }
        });
      },
      { threshold: 0.09 },
    );

    if (node.classList.contains("fi")) observer.observe(node);
    node.querySelectorAll(".fi").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}
