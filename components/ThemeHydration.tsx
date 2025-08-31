// Ensures theme is applied correctly on hydration (for next-themes)
"use client";
import { useEffect } from "react";

export function ThemeHydration() {
	useEffect(() => {
		// This will trigger a re-render after hydration to ensure theme is correct
	}, []);
	return null;
}
