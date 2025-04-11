"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProjectModal from "@/components/ProjectModal";
import { Project } from "@/types";
import gsap from "gsap";

export default function ProjectsSection() {
  const t = useTranslations("Projects");
  const projects = t.raw("list") as Project[];
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const loadAnimation = async () => {
      const ScrollTrigger = (await import('gsap/ScrollTrigger')).ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)
  
      cardsRef.current.forEach((card) => {
        if (!card) return
  
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none reset'
            }
          }
        )
      })
    }
  
    loadAnimation()
  
    return () => {
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger?.getAll().forEach((trigger) => trigger.kill())
      }
    }
  }, [])
  

  return (
    <section className="w-full bg-white py-20 px-4 md:px-12" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-12 font-sans">
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              className="flex flex-col items-center"
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 border border-blue-100 flex flex-col items-center text-center">
                <CardHeader className="w-full flex justify-center">
                  <div className="relative w-24 h-24 mt-4">
                    <Image
                      src={project.image}
                      alt={`${project.name} logo`}
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>
                </CardHeader>

                <CardContent className="text-blue-700 space-y-4 px-4 pb-6 w-full">
                  <CardTitle className="text-lg text-blue-800 font-semibold mt-2">
                    {project.name}
                  </CardTitle>

                  <p className="text-sm">{project.description}</p>

                  <div className="flex flex-wrap justify-center gap-2">
                    {project.stack?.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-blue-800 border-blue-200 hover:bg-blue-100"
                        >
                          Ver proyecto
                        </Button>
                      </Link>
                    )}

                    <ProjectModal project={project} />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
