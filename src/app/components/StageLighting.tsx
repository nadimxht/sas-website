"use client";
import { useEffect, useState } from "react";

export default function StageLighting() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-[50]"
      style={{
        background: `radial-gradient(800px circle at ${mouse.x}px ${mouse.y}px, rgba(197, 160, 89, 0.04), transparent 100%)`,
      }}
    />
  );
}