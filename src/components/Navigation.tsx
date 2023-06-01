'use client';

import Link from 'next/link';
import Image from 'next/image';
import kingsBrand from '../assets/ui/kings-brand.png';
import charmNotch from '../assets/ui/charm-notch.png';

export default function Navigation() {
  return (
    <nav className="w-full max-h-[10rem] px-3 p-4 flex items-center justify-between">
      <Link href="/">
        <Image
          src={kingsBrand}
          alt={`The Knight's Calculator`}
          className="aspect-auto w-auto max-w-[60px] h-auto cursor-pointer"
        />
      </Link>
      <button type="button">
        <Image
          src={charmNotch}
          alt="Settings"
          className="aspect-auto w-auto max-w-[60px] h-auto cursor-pointer"
        />
      </button>
    </nav>
  );
}
