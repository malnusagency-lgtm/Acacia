"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
}

export default function ComparisonSlider({
  beforeImage,
  afterImage,
  className = "",
}: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in event ? event.touches[0].clientX : event.clientX;
    const position = ((x - rect.left) / rect.width) * 100;

    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleMove);
      window.addEventListener("touchend", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-video rounded-3xl overflow-hidden cursor-ew-resize select-none border border-outline-variant/10 shadow-2xl ${className}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* After Image (Background) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${afterImage}')` }}
      />

      {/* Before Image (Frontend with clip) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${beforeImage}')`,
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      />

      {/* Slider Line / Handle */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute inset-y-0 left-[-1px] w-[2.5px] bg-white shadow-[0_0_15px_rgba(255,255,255,0.6)] z-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-2xl z-30 ring-4 ring-black/5">
          <div className="flex gap-1.5 md:gap-1">
            <div className="w-1 md:w-0.5 h-4 md:h-3 bg-primary/30 rounded-full" />
            <div className="w-1 md:w-0.5 h-4 md:h-3 bg-primary/30 rounded-full" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 z-40 bg-black/50 backdrop-blur-md text-white text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-lg border border-white/10">
        Before
      </div>
      <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 z-40 bg-accent/90 backdrop-blur-md text-on-accent text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-lg border border-accent/20">
        After
      </div>
    </div>
  );
}
