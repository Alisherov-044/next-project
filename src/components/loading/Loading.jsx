import { useEffect, useRef } from "react";
import { animate } from "../../helpers";

export function Loading() {
  const loadingCircleRef = useRef();
  const loadingDotsRef = useRef([]);
  const loadingDots = "...";

  useEffect(() => {
    const defaults = {
      duration: 1,
      ease: "none",
      repeat: -1,
    };
    animate(
      loadingCircleRef.current,
      {
        rotate: 360,
      },
      defaults
    );
    animate(
      loadingDotsRef.current,
      {
        duration: 0.5,
        opacity: 0,
        yoyo: true,
        stagger: 0.25,
      },
      defaults
    );
  }, [loadingCircleRef, loadingDotsRef]);

  return (
    <div className="loading__wrapper">
      <div className="loading-circle">
        <div className="loading-circle__progress" ref={loadingCircleRef}></div>
      </div>
      <div className="loading-text">
        <span>Loading</span>
        {loadingDots.split("").map((dot, index) => (
          <span
            key={index}
            className={`dot-${index}`}
            ref={(el) => (loadingDotsRef.current[index] = el)}
          >
            {dot}
          </span>
        ))}
      </div>
    </div>
  );
}
