"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="relative inline-flex items-center justify-center size-9 rounded-full border border-white/10 dark:border-white/10 bg-white/5 dark:bg-white/5 hover:bg-white/10 dark:hover:bg-white/10 text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white transition-all duration-200 group"
      style={{
        borderColor: "var(--border-subtle)",
        background: "var(--bg-card)",
        color: "var(--text-muted)",
      }}
    >
      <span className="sr-only">Toggle theme</span>
      {theme === "dark" ? (
        <Sun className="size-4 transition-transform group-hover:rotate-12" />
      ) : (
        <Moon className="size-4 transition-transform group-hover:-rotate-12" />
      )}
    </button>
  );
}
