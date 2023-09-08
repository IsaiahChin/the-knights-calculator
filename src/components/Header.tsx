'use client';

import { useEffect, useState } from 'react';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Info from './Info';

import knightIcon from '@/assets/ui/knight-icon.png';
import MenuBackgrounds from '@/assets/menu-backgrounds';

export default function Header() {
  const [headerBackground, setHeaderBackground] = useState<StaticImageData>();

  const navLinks = [
    { id: 0, name: 'Enemies' },
    { id: 1, name: 'Statistics' },
    { id: 2, name: 'Loadout' },
  ];

  // Set random header background image on startup
  useEffect(() => {
    let amountOfBackgrounds = Object.keys(MenuBackgrounds).length;
    let randomIndex = Math.floor(Math.random() * amountOfBackgrounds);
    setHeaderBackground(Object.values(MenuBackgrounds)[randomIndex]);
  }, []);

  return (
    <header
      className="w-full mx-auto mb-4 md:mb-0 pl-4 pr-0 lg:px-8 py-4 flex items-start md:items-center justify-between sticky z-50 top-0
      bg-zinc-950 bg-cover md:bg-contain bg-no-repeat bg-center box-border md:bg-[top_0rem_left_-1.5rem]"
      style={{ backgroundImage: `url(${headerBackground?.src})` }}
    >
      <span>
        <h3 className="w-max py-2">
          <a href="/the-knights-calculator" className="hidden md:contents">
            The Knight&apos;s Calculator
          </a>
          <a
            href="/the-knights-calculator"
            className="flex items-center gap-2 md:hidden"
          >
            <Image
              alt="The Knight's Calculator"
              src={knightIcon}
              className="max-w-[40px]"
            />
            <span>The Knight&apos;s Calculator</span>
          </a>
        </h3>
        <nav aria-label="Mobile navigation" className="flex md:hidden gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${
                link.name[0].toLowerCase() +
                link.name.slice(1, link.name.length)
              }`}
              className="flex gap-2 items-center group"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </span>
      <Info />
    </header>
  );
}
