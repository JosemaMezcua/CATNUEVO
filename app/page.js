"use client";

import { useEffect } from "react";

const TARGET_URL = "https://www.yelloworiginal.com/colecciones/nuevo";
const REDIRECT_DELAY_MS = 1600;

export default function Page() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.href = TARGET_URL;
    }, REDIRECT_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="screen">
      <h1 className="poster">NUEVO</h1>
    </main>
  );
}
