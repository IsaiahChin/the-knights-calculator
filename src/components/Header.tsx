import Info from './Info';

import Image from 'next/image';
import knightIcon from '@/assets/ui/knight-icon.png';

export default function Header() {
  const navLinks = [
    { id: 0, name: 'Enemies' },
    { id: 1, name: 'Statistics' },
    { id: 2, name: 'Loadout' },
  ];

  return (
    <header className="w-full mx-auto pl-4 pr-0 lg:px-8 py-4 flex items-start md:items-center justify-between z-50 sticky top-0 bg-zinc-950 border-b-2 border-zinc-100/70 md:border-b-0 mb-4 md:mb-0">
      <span>
        <h3 className="w-max py-2">
          <a href="/" className="hidden md:contents">
            The Knight&apos;s Calculator
          </a>
          <a href="/" className="flex items-center gap-2 md:hidden">
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
            <a
              key={link.id}
              href={`#${
                link.name[0].toLowerCase() +
                link.name.slice(1, link.name.length)
              }`}
              className="flex gap-2 items-center group"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </span>
      <Info />
    </header>
  );
}
