"use client";
import { PropsWithChildren } from "react";

type FocusInputProps = PropsWithChildren<{
  className?: string;
  targetId?: string; // optional, default "name-input"
}>;

const FocusInput = ({
  children,
  className,
  targetId = "name-input",
}: FocusInputProps) => {
  const handleClick = () => {
    const el = document.getElementById(targetId) as HTMLElement | null;
    if (!el) return;

    // Scroll smoothly
    el.scrollIntoView({ behavior: "smooth", block: "center" });

    // Focus after scroll completes to avoid jump
    requestAnimationFrame(() => {
      el.focus({ preventScroll: true });
    });
  };

  return (
    <button className={className} onClick={handleClick} type="button">
      {children}
    </button>
  );
};

export default FocusInput;
