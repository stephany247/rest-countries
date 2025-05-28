"use client";

import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "next-themes";
import { Moon } from "lucide-react";
import { FaMoon } from "react-icons/fa";

export function Navbar() {
  return (
    <header className="shadow-lg">
      <div className="container flex items-center justify-between p-4 md:px-6 h-20 md:h-28 mx-auto">
        <h1 className="font-bold md:text-3xl">Where in the world?</h1>
        <ModeToggle />
      </div>
    </header>
  );
}

function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Toggle
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="md:text-xl capitalize"
    >
      {theme === "dark" ? (
        <div className="flex items-center gap-2">
          <FaMoon className="w-4 h-4" /> Light mode{" "}
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Moon className="w-6 h-6" /> Dark mode
        </div>
      )}
    </Toggle>
  );
}
