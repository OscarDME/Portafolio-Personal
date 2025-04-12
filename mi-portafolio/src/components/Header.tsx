"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const { locale, push, pathname } = useRouter();
  const t = useTranslations("Layout");

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "es" : "en";
    push(pathname, pathname, { locale: nextLocale });
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent font-sans">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-20 h-20">
            <Image
              src="/logo.png"
              alt="Oscar.dev logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex gap-6 text-sm font-medium font-sans tracking-widest">
            <NavigationMenuItem>
              <Link href="/" className="text-black hover:opacity-80 transition">
                {t("home")}
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a
                href="#projects"
                className="text-black hover:opacity-80 transition"
              >
                {t("projects")}
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a
                href="#about"
                className="text-black hover:opacity-80 transition"
              >
                {t("about")}
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a
                href="#contact"
                className="text-black hover:opacity-80 transition"
              >
                {t('contact')}
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          variant="outline"
          size="sm"
          className="text-xs px-3 py-1.5 font-semibold text-black border-white hover:bg-white/10 font-sans"
          onClick={toggleLocale}
        >
          {locale === "en" ? "🇪🇸 ES" : "🇺🇸 EN"}
        </Button>
      </div>
    </header>
  );
}
