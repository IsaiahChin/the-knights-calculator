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
    soulRegen: knight.nail.soulRegen,
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

  return (
    <>
      <section className="w-2/5 h-auto p-4">
        <h1 className="text-center py-3">The Knight's Calculator</h1>
        <Image src={creditsFleur} alt="" className="m-[0_auto] mt-4" />
        <StatContainer loadout={loadout} />
      </section>
      <section className="w-3/5 h-auto p-4">
        <nav className="w-full px-3 p-4 flex items-center justify-center">
          <ul className="inline-flex justify-center gap-4">
            {navLinks.map((link) => (
              <li key={link.index}>
                <button
                  type="button"
                  onClick={() => handleTabChange(link.index)}
                  className={`${
                    tabIndex == link.index && 'underline'
                  } underline-offset-8 decoration-white decoration-2 hover:underline`}
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <Image
          src={creditsFleur}
          alt=""
          className="m-[0_auto] max-w-[80%] mt-4"
        />
        <div className={`${tabIndex == 0 ? 'block' : 'hidden'}`}>
          <LoadoutContainer
            loadout={loadout}
            updateNailDamage={updateNailDamage}
          />
        </div>
        <div className={`${tabIndex == 1 ? 'block' : 'hidden'}`}>
          <h1 className="h-min p-8 text-center">Enemies</h1>
        </div>
      </section>
    </>
  );
}
