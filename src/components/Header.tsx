'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import kingsBrand from '../assets/ui/kings-brand.png';
import journal from '../assets/ui/journal-prompt.png';
import { creditsFleur } from '../assets/ui/fleur';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { title: 'The Knight', link: '/' },
    { title: 'Enemies', link: '/enemies' },
  ];

  return (
    <header>
      <nav className="w-full max-h-[10rem] px-3 p-4 flex items-center justify-between">
        <Link href="/" className="glow-on-hover">
          <Image
            src={kingsBrand}
            alt={`The Knight's Calculator`}
            className="w-auto max-w-[60px] cursor-pointer"
          />
        </Link>
        <ul className="inline-flex justify-center gap-4 [&_a]:glow-on-hover">
          {navLinks.map((link, index) => (
            <li key={index} className={`${pathname == link.link && 'glow'}`}>
              <Link href={link.link}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <button type="button">
          <Image
            src={journal}
            alt="Settings"
            className="w-auto max-w-[60px] cursor-pointer"
          />
        </button>
      </nav>
      <Image src={creditsFleur} alt="Nav border" className="m-[0_auto]" />
    </header>
  );
}
