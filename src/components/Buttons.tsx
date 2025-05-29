"use client";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import React from "react";

type NavButtonProps = {
  to: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
};

export function NavButton({
  to,
  children,
  icon,
  className = "",
}: NavButtonProps) {
  const router = useRouter();
  return (
    <Button
      type="button"
      onClick={() => router.push(to)}
      className={`flex items-center gap-2 capitalize shadow rounded cursor-pointer ${className}`}
      size="lg"
      variant="outline"
    >
      {icon}
      {children}
    </Button>
  );
}

// For back button:
export function BackButton() {
  return (
    <NavButton
      to="/"
      icon={<ArrowLeft className="h-4 w-4 md:w-8 md:h-6" />}
      className="md:w-40 md:py-6 md:text-xl"
    >
      Back
    </NavButton>
  );
}
