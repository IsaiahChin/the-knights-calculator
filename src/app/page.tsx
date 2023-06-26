'use client';

import { useState } from 'react';

import Image from 'next/image';
import StatContainer from '@/components/StatContainer';
import LoadoutContainer from '@/components/LoadoutContainer';

import knight from '@/data/knight';
import { creditsFleur } from '../assets/ui/fleur';

export default function Home() {
  const [tabIndex, setTabIndex] = useState(0);
  const [loadout, setLoadout] = useState({
    maxHealth: knight.health.max,
    minHealth: knight.health.min,
    nailDamage: knight.nail.damage[0],
    nailSwingRate: knight.nail.rate,
    maxSoul: knight.soul.max,
    spellCost: knight.soul.cost,
  });

  const navLinks = [
    { index: 0, title: 'Inventory' },
    { index: 1, title: 'Enemies' },
  ];

  function handleTabChange(index: number) {
    setTabIndex(index);
  }

  function updateNailDamage(newDamage: number) {
    setLoadout({
      ...loadout,
      nailDamage: newDamage,
    });
  }

  // setLoadout({
  //   ...loadout,
  //   nail: { ...loadout.nail, rate: 5 },
  // });

  return (
    <>
      <section className="w-2/5 h-auto p-4">
        <StatContainer loadout={loadout} />
      </section>
      <section className="w-3/5 h-auto p-4">
        <nav className="w-full px-3 p-4 flex items-center justify-center">
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
        <span className={`${tabIndex == 0 ? 'block' : 'hidden'}`}>
          <LoadoutContainer
            loadout={loadout}
            updateNailDamage={updateNailDamage}
          />
        </span>
        <span className={`${tabIndex == 1 ? 'block' : 'hidden'}`}>
          <h2 className="text-center">Enemies</h2>
        </span>
      </section>
    </>
  );
}
