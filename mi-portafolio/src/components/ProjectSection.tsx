"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import ProjectModal from "@/components/ProjectModal";
import gsap from "gsap";
import { Project } from "@/types";

let ScrollTrigger: any; // 👈 definido fuera para uso global dentro del componente

export default function ProjectsSection() {
  const t = useTranslations("Projects");
  const projects = t.raw("list") as Project[];
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadAnimation = async () => {
      const module = await import("gsap/ScrollTrigger");
      ScrollTrigger = module.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const items = sectionRef.current?.querySelectorAll(".project-item");

      if (items) {
        items.forEach((el, i) => {
          const fromX = i % 2 === 0 ? -100 : 100;

          gsap.fromTo(
            el,
            { opacity: 0, x: fromX },
            {
              opacity: 1,
              x: 0,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play none none reset",
              },
            }
          );
        });
      }
    };

    loadAnimation();

    return () => {
      if (typeof window !== "undefined" && ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, []);

  return (
    <section
      className="w-full bg-white py-24 px-4 md:px-12 overflow-x-hidden"
      id="projects"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-20 text-center">
          {t("title")}
        </h2>

        <div className="space-y-14">
          {projects.map((project, idx) => {
            const isRightImage = idx % 2 === 1;

            return (
              <div
                key={idx}
                className={`project-item flex flex-row items-start gap-4 sm:gap-6 md:gap-10 ${
                  idx % 2 === 1 ? "flex-row-reverse" : ""
                }`}
              >
                {/* Imagen */}
                <div className="relative w-[120px] h-[120px] sm:w-[100px] sm:h-[100px] md:w-[200px] md:h-[200px] rounded-lg overflow-hidden shadow-md shrink-0">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Contenido */}
                <div
                  className={`w-full text-blue-900 space-y-4 md:pt-6 ${
                    idx % 2 === 1 ? "md:w-[55%] md:ml-auto" : "md:w-1/2"
                  }`}
                >
                  {/* Título */}
                  <div className="inline-block relative">
                    <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold relative z-10">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base md:text-xl text-blue-800">
                    {project.description}
                  </p>

                  {project.stack && (
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Botones */}
                  <div className="pt-2 flex gap-3 flex-wrap">
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          className="text-sm text-blue-800 border-blue-300 hover:bg-blue-100"
                        >
                          {t("viewProject")}
                        </Button>
                      </Link>
                    )}
                    <ProjectModal project={project} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
