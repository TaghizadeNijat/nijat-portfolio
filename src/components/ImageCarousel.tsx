"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type CarouselSlide = {
  src: string;
  title: string;
  alt: string;
};

type ImageCarouselProps = {
  slides: CarouselSlide[];
};

export function ImageCarousel({ slides }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const fadeTimeoutRef = useRef<number | null>(null);
  const swapTimeoutRef = useRef<number | null>(null);

  const moveToSlide = (nextIndex: number) => {
    if (slides.length <= 1) {
      return;
    }

    if (fadeTimeoutRef.current) {
      window.clearTimeout(fadeTimeoutRef.current);
    }
    if (swapTimeoutRef.current) {
      window.clearTimeout(swapTimeoutRef.current);
    }

    setIsVisible(false);
    swapTimeoutRef.current = window.setTimeout(() => {
      setIndex(nextIndex);
      fadeTimeoutRef.current = window.setTimeout(() => {
        setIsVisible(true);
      }, 30);
    }, 180);
  };

  useEffect(() => {
    return () => {
      if (fadeTimeoutRef.current) {
        window.clearTimeout(fadeTimeoutRef.current);
      }
      if (swapTimeoutRef.current) {
        window.clearTimeout(swapTimeoutRef.current);
      }
    };
  }, []);

  const prevSlide = () => {
    const nextIndex = (index - 1 + slides.length) % slides.length;
    moveToSlide(nextIndex);
  };

  const nextSlide = () => {
    const nextIndex = (index + 1) % slides.length;
    moveToSlide(nextIndex);
  };

  const current = slides[index];

  return (
    <section className="panel space-y-4">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-slate-900">{current.title}</h3>
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
          {index + 1} / {slides.length}
        </p>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-slate-300 bg-slate-50">
        <div className="flex h-[21rem] w-full items-center justify-center md:h-[28rem]">
          <Image
            src={current.src}
            alt={current.alt}
            width={1800}
            height={1200}
            className={`mx-auto max-h-full w-auto object-contain transition-opacity duration-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white/95 px-3 py-2 text-sm font-semibold text-slate-700 shadow transition hover:border-blue-300 hover:text-blue-700"
          aria-label="Previous image"
        >
          ←
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white/95 px-3 py-2 text-sm font-semibold text-slate-700 shadow transition hover:border-blue-300 hover:text-blue-700"
          aria-label="Next image"
        >
          →
        </button>
      </div>
    </section>
  );
}
