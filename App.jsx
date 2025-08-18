import React, { useEffect, useMemo, useState } from "react";

// Bo's finurlige matchopsætning — single-file React component for canvas preview
// Funktioner:
// - Fase 1: Den faste trup (fravælg spillere, rediger liste)
// - Fase 2: Kortvalg (blå, kvadratiske kort, tennisbold på bagsiden)
// - Vælg præcis 4 kort → Vend → Gem match (2 vs 2), med "Remix match"
// - Lokal gemning af truppen i localStorage på enheden
// - Tydelig markering af valgte kort: tyk rød ring, lidt lysere og lille scale

const STORAGE_KEY = "bo_match_roster_v1";
const DEFAULT_NAMES = [
  "Bent","Bo","Hans Jørgen","Henning","Jan","Kaj","Karsten","Lene","Martin","Morten",
  "Niels","Ole","Orla","Ove","Peer","Poul","Pimse","Robert","Tage","Viggo","Pia"
];

function TennisBallIcon({ size = 28 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={size} height={size} aria-hidden>
      <defs>
        <radialGradient id="tbGrad" cx="35%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#e9ff70" />
          <stop offset="60%" stopColor="#ccff00" />
          <stop offset="100%" stopColor="#a0d91a" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#tbGrad)" stroke="#86a341" strokeWidth="2" />
      <path d="M 2 50 a 48 48 0 0 1 96 0" fill="none" stroke="#f8fafc" strokeWidth="5" strokeLinecap="round" />
      <path d="M 98 50 a 48 48 0 0 1 -96 0" fill="none" stroke="#f8fafc" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

function TeamChip({ name }) {
  return <div className="px-2 py-1 bg-red-600 rounded text-white text-sm font-medium">{name}</div>;
}

export default function App() {
  // entire code omitted for brevity, as included in canvas
}
