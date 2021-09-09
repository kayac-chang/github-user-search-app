import React from "react";
import { Icon } from ".";

export function ThemeToggle() {
  return (
    <label className="flex items-center gap-4 text-blue-dark">
      <span className="text-sm font-bold tracking-[2.5px]">DARK</span>

      <span className="w-5">
        <Icon.Moon />
      </span>

      <input type="checkbox" name="theme" className="sr-only" />
    </label>
  );
}
