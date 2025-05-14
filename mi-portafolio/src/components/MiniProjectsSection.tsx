"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import ProjectModal from "@/components/ProjectModal";
import gsap from "gsap";
import { Project } from "@/types";

let ScrollTrigger: any;

export default function MiniProjectsSection() {
  const t = useTranslations("MiniProjects");
  const miniProjects = t.raw("list") as Project[];
  // Solo tomar los primeros 2 proyectos
  const displayedProjects = miniProjects.slice(0, 2);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadAnimation = async () => {
      const module = await import("gsap/ScrollTrigger");
      ScrollTrigger = module.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const items = sectionRef.current?.querySelectorAll(".mini-project-item");

      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.2,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              // Modificar estos valores para que la animación se active antes
              start: "top bottom-=200", // Activar cuando el top de la sección llegue al bottom-200px de la ventana
              end: "bottom top",
              toggleActions: "play none none reset",
              // Agregar un pequeño retraso para asegurar que las animaciones se carguen correctamente
              once: false,
              markers: false, // Cambiar a true para depuración si es necesario
            },
          }
        );
      }
    };

    // Ejecutar loadAnimation inmediatamente después de que el componente se monte
    loadAnimation();

    return () => {
      if (typeof window !== "undefined" && ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, []);

  return (
    <section
      className="w-full bg-blue-50 py-20 px-4 md:px-12 overflow-x-hidden"
      id="mini-projects"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12 text-center">
          {t("title")}
        </h2>
        
        <p className="text-lg text-blue-800 text-center max-w-3xl mx-auto mb-16">
          {t("subtitle")}
        </p>

        {/* Cambiar a grid de 2 columnas en todos los tamaños excepto móvil */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {displayedProjects.map((project, idx) => (
            <div
              key={idx}
              className="mini-project-item bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Imagen */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Contenido */}
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-blue-900">
                  {project.name}
                </h3>
                
                <p className="text-sm text-blue-800 line-clamp-3">
                  {project.description}
                </p>

                {project.stack && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.stack.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>
                )}

                {/* Botones */}
                <div className="pt-3 flex gap-2 flex-wrap">
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs text-blue-800 border-blue-300 hover:bg-blue-100"
                      >
                        {t("viewProject")}
                      </Button>
                    </Link>
                  )}
                  <ProjectModal project={project} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}