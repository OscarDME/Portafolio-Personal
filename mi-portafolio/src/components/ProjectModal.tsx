"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Project } from "@/types";
import FullScreenImageGalleryModal from "@/components/FullScreenImageGalleryModal"; 
interface ProjectModalProps {
  project: Project;
}

export default function ProjectModal({ project }: ProjectModalProps) {
  const t = useTranslations("Projects");
  const [current, setCurrent] = useState(0);
  const gallery = project.gallery || [];

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-sm text-blue-800 border-blue-300 hover:bg-blue-100"
        >
          {t("seeMore")}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold">
            {project.name}
          </DialogTitle>
          <DialogDescription className="text-blue-800 mt-1">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        {/* Imagen principal con fullscreen modal */}
        {gallery.length > 0 && (
          <div className="mt-6 relative">
            <div className="w-full h-64 md:h-80 relative rounded-lg overflow-hidden shadow-sm">
              <Image
                src={gallery[current]}
                alt={`Screenshot ${current + 1}`}
                fill
                className="object-contain bg-white rounded-lg"
              />
              <FullScreenImageGalleryModal
                images={gallery}
                currentIndex={current}
              />
            </div>

            {/* Botones de navegación */}
            <div className="absolute inset-y-0 left-0 flex items-center px-2">
              <Button size="icon" variant="ghost" onClick={prev}>
                <ChevronLeft />
              </Button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center px-2">
              <Button size="icon" variant="ghost" onClick={next}>
                <ChevronRight />
              </Button>
            </div>
          </div>
        )}

        {/* Miniaturas */}
        {gallery.length > 1 && (
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {gallery.map((thumb, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`relative w-16 h-16 flex-shrink-0 rounded-md cursor-pointer border-2 transition ${
                  current === index ? "border-blue-600" : "border-transparent"
                }`}
              >
                <Image
                  src={thumb}
                  alt={`Thumb ${index + 1}`}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        )}

        {/* Detalles */}
        {project.details && (
          <p className="mt-6 text-sm text-blue-900 leading-relaxed">
            {project.details}
          </p>
        )}

        {/* Rol */}
        {project.role && (
          <div className="mt-4">
            <p className="font-semibold text-sm text-blue-900">Mi rol:</p>
            <p className="text-sm text-blue-800">{project.role}</p>
          </div>
        )}

        {/* Stack */}
        {Array.isArray(project.stack) && project.stack.length > 0 && (
          <div className="mt-4">
            <p className="font-semibold text-sm text-blue-900">Stack:</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Link */}
        {project.link && (
          <div className="mt-6">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-700 underline"
            >
              {t('visitProject')}
            </a>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
