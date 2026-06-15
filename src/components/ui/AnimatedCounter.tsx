"use client";

import { useEffect, useRef } from "react";

export default function AnimatedCounter({
  value,
  suffix = "",
  isInView,
}: {
  value: number;
  suffix?: string;
  isInView: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isInView || !ref.current) return;

    let current = 0;
    const increment = Math.ceil(value / 60);
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        current = value;
        clearInterval(timer);
      }
      if (ref.current) ref.current.textContent = current.toLocaleString("en-IN");
    }, 25);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}
