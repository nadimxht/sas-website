"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "./components/NavBar";
import CurtainReveal from "./components/CurtainReveal";
import StageLighting from "./components/StageLighting";

type ThemeMode = "light" | "dark";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as ThemeMode | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : systemTheme;

    setTheme(initialTheme);
    document.documentElement.classList.toggle("light", initialTheme === "light");
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  // FORCE a non-empty string. React hates key=""
  // If pathname is "/" it becomes "route-/, if it's "" it becomes "route-home"
  const activeKey = pathname ? `route-${pathname}` : "route-home";

  if (!mounted) {
    return <div className="min-h-screen bg-[color:var(--background)]" />;
  }

  return (
    <>
      <StageLighting />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      {/* This unique key ensures the curtain re-triggers on page change */}
      <CurtainReveal key={activeKey}>
        {children}
      </CurtainReveal>

      <div className="fixed inset-0 pointer-events-none z-[1] opacity-20 mix-blend-soft-light bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
    </>
  );
}