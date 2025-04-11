"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const t = useTranslations("Home");
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const text = t("title");
    const chars = text.split("");
    const target = titleRef.current;

    if (!target) return;

    target.textContent = "";

    chars.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = "0";
      target.appendChild(span);
    });

    gsap.to(target.children, {
      opacity: 1,
      duration: 0.2,
      stagger: 0.08,
      ease: "none",
    });
  }, [t]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full h-full gap-8 md:gap-16 text-center md:text-left px-4 md:px-16">
        <div className="w-80 h-80 relative rounded-full overflow-hidden shadow-xl bg-white transition-transform duration-300 hover:scale-105">
          <Image
            src="/yo.png"
            alt="Yo"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-xl">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-4 text-blue-950 whitespace-nowrap"
          ></h1>

          <p className="text-lg md:text-2xl text-blue-800 mb-6">
            {t("subtitle")}
          </p>

          <Link href="/projects">
            <Button
              size="xl"
              className="bg-blue-600 hover:bg-blue-700 text-white text-md"
            >
              {t("cta")}
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-blue-800 text-sm animate-bounce z-20">
        ↓ {t("scroll")}
      </div>
    </section>
  );
}
