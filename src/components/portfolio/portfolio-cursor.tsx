import { useEffect, useRef } from "react";

export function PortfolioCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reducedMotion.matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    document.body.classList.add("has-portfolio-cursor");

    const sparkles = Array.from(cursor.querySelectorAll<HTMLElement>(".portfolio-cursor__spark"));
    let pointerX = 0;
    let pointerY = 0;
    let lastSparkAt = 0;
    let nextSparkle = 0;
    let idleTimeout = 0;

    const updatePosition = (event: PointerEvent) => {
      const hadPointerPosition = cursor.dataset["positioned"] === "true";
      const deltaX = hadPointerPosition ? event.clientX - pointerX : 0;
      const deltaY = hadPointerPosition ? event.clientY - pointerY : 0;
      const speed = Math.hypot(deltaX, deltaY);
      pointerX = event.clientX;
      pointerY = event.clientY;
      cursor.dataset["positioned"] = "true";

      cursor.style.setProperty("--cursor-x", `${pointerX}px`);
      cursor.style.setProperty("--cursor-y", `${pointerY}px`);
      cursor.style.setProperty("--cursor-angle", `${Math.atan2(deltaY, deltaX)}rad`);
      cursor.style.setProperty("--cursor-stretch", `${1 + Math.min(speed / 90, 0.65)}`);
      cursor.dataset["visible"] = "true";
      cursor.dataset["moving"] = String(speed > 0 && hadPointerPosition);

      window.clearTimeout(idleTimeout);
      if (speed > 0) {
        idleTimeout = window.setTimeout(() => {
          cursor.dataset["moving"] = "false";
          cursor.style.setProperty("--cursor-stretch", "1");
        }, 90);
      }

      const now = performance.now();
      if (speed > 4 && now - lastSparkAt > 32 && sparkles.length > 0) {
        const sparkle = sparkles[nextSparkle];
        nextSparkle = (nextSparkle + 1) % sparkles.length;
        if (sparkle) {
          sparkle.style.setProperty("--spark-x", `${pointerX + (Math.random() - 0.5) * 14}px`);
          sparkle.style.setProperty("--spark-y", `${pointerY + (Math.random() - 0.5) * 14}px`);
          sparkle.style.setProperty("--spark-drift", `${(Math.random() - 0.5) * 32}px`);
          sparkle.style.setProperty("--spark-duration", `${420 + Math.random() * 260}ms`);
          sparkle.dataset["active"] = "true";
          sparkle.getAnimations().forEach((animation) => animation.cancel());
          sparkle.animate(
            [
              { opacity: 1, transform: "translate(-50%, -50%) scale(1) rotate(0deg)" },
              {
                opacity: 0,
                transform: `translate(calc(-50% + ${sparkle.style.getPropertyValue("--spark-drift")}), calc(-50% + 34px)) scale(0) rotate(100deg)`,
              },
            ],
            {
              duration: Number.parseFloat(sparkle.style.getPropertyValue("--spark-duration")),
              easing: "ease-out",
            },
          ).onfinish = () => {
            sparkle.dataset["active"] = "false";
          };
          lastSparkAt = now;
        }
      }

      const target = event.target;
      const interactive =
        target instanceof Element &&
        target.closest(
          "a, button, input, textarea, select, [role='button'], [data-cursor='interactive']",
        );
      cursor.dataset["interactive"] = String(!!interactive);
    };

    const hideCursor = () => {
      cursor.dataset["visible"] = "false";
    };

    const pressCursor = () => {
      cursor.dataset["pressed"] = "true";
    };
    const releaseCursor = () => {
      cursor.dataset["pressed"] = "false";
    };

    window.addEventListener("pointermove", updatePosition);
    window.addEventListener("pointerleave", hideCursor);
    window.addEventListener("pointerdown", pressCursor);
    window.addEventListener("pointerup", releaseCursor);

    return () => {
      document.body.classList.remove("has-portfolio-cursor");
      window.clearTimeout(idleTimeout);
      sparkles.forEach((sparkle) =>
        sparkle.getAnimations().forEach((animation) => animation.cancel()),
      );
      window.removeEventListener("pointermove", updatePosition);
      window.removeEventListener("pointerleave", hideCursor);
      window.removeEventListener("pointerdown", pressCursor);
      window.removeEventListener("pointerup", releaseCursor);
    };
  }, []);

  return (
    <div ref={cursorRef} className="portfolio-cursor" aria-hidden="true">
      <span className="portfolio-cursor__core" />
      <span className="portfolio-cursor__spark" />
      <span className="portfolio-cursor__spark" />
      <span className="portfolio-cursor__spark" />
      <span className="portfolio-cursor__spark" />
      <span className="portfolio-cursor__spark" />
      <span className="portfolio-cursor__spark" />
    </div>
  );
}
