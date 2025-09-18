"use client";

import { useEffect, useState } from "react";
import { AnimatedCircularProgressBar } from "./magicui/animated-circular-progress-bar";

interface LoadingProps {
  fullScreen?: boolean;
  title?: string;
  subtitle?: string;
  loadingText?: string;
  size?: number;
}

export function Loading({ 
  fullScreen = true, 
  title = "Sarmad Irfan",
  subtitle = "Software Engineer – Web, Mobile & AI",
  loadingText = "Loading amazing content...",
  size = 150
}: LoadingProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleIncrement = (prev: number) => {
      if (prev === 100) {
        return 0;
      }
      return prev + 10;
    };
    setValue(handleIncrement);
    const interval = setInterval(() => setValue(handleIncrement), 2000);
    return () => clearInterval(interval);
  }, []);

  const containerClass = fullScreen 
    ? "flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-darkBlack via-darkGray1 to-darkGray2"
    : "flex flex-col items-center justify-center p-8";

  return (
    <div className={containerClass}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          {subtitle}
        </p>
        <AnimatedCircularProgressBar
          value={value}
          gaugePrimaryColor="rgb(79 70 229)"
          gaugeSecondaryColor="rgba(255, 255, 255, 0.1)"
          size={size}
          strokeWidth={10}
        />
        <p className="text-sm text-gray-400 mt-4">
          {loadingText}
        </p>
      </div>
    </div>
  );
}
