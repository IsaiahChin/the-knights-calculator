'use client';

import { useState } from 'react';
import Image from 'next/image';

import StatContainer from '@/components/StatContainer';

import { creditsFleur } from '../assets/ui/fleur';

import knight from '@/data/knight';
import LoadoutContainer from '@/components/LoadoutContainer';

export default function Home() {
  const [tabIndex, setTabIndex] = useState(0);
  const [loadout, setLoadout] = useState(knight);

  const navLinks = [
    { index: 0, title: 'Inventory', component: <></> },
    { index: 1, title: 'Enemies', component: <></> },
  ];

  function handleTabChange(index: number) {
    setTabIndex(index);
  }

  return (
    <>
      <section className="w-2/5 h-full p-4">
        <StatContainer loadout={loadout} />
      </section>
      <section className="w-3/5 h-full p-4">
        <nav className="w-full max-h-[10rem] px-3 p-4 flex items-center justify-center">
          <ul className="inline-flex justify-center gap-4 [&_li]:glow-on-hover">
            {navLinks.map((link) => (
              <li
                key={link.index}
                className={`${tabIndex == link.index && 'glow'}`}
              >
                <button
                  type="button"
                  onClick={() => handleTabChange(link.index)}
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <Image
          src={creditsFleur}
          alt="-----"
          className="m-[0_auto] max-w-[80%] mb-10"
        />
        {tabIndex == 0 && <LoadoutContainer loadout={loadout} />}
        {tabIndex == 1 && <h2 className="text-center">Enemies</h2>}
      </section>
    </>
  );
}
