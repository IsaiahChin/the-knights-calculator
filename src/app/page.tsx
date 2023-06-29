'use client';

import { useState } from 'react';

import Image, { StaticImageData } from 'next/image';
import StatContainer from '@/components/StatContainer';
import LoadoutContainer from '@/components/LoadoutContainer';

import { creditsFleur } from '../assets/ui/fleur';
import knight from '@/data/knight';
import spells from '@/constants/spells';
import { oldNail } from '@/assets/ui/loadout/nail';

export default function Home() {
  const [tabIndex, setTabIndex] = useState(0);
  const [loadout, setLoadout] = useState({
    health: {
      max: knight.health.max,
      min: knight.health.min,
    },
    nail: {
      damage: knight.nail.damage[0],
      swingRate: knight.nail.rate,
      image: oldNail,
    },
    soul: {
      max: knight.soul.max,
      spellCost: knight.soul.cost,
      regen: knight.nail.soulRegen,
    },
    spell: {
      fireball: {
        damage: spells[0].damage,
        icon: spells[0].icon,
      },
      dive: {
        damage: spells[2].damage,
        icon: spells[2].icon,
      },
      wraiths: {
        damage: spells[4].damage,
        icon: spells[4].icon,
      },
    },
  });

  const navLinks = [
    { index: 0, title: 'Inventory' },
    { index: 1, title: 'Enemies' },
  ];

  function handleTabChange(index: number) {
    setTabIndex(index);
  }

  /**
   * Updates `nail.damage` and `nail.image` from loadout state
   * @param newDamage
   */
  function updateNail(newDamage: number, image: StaticImageData) {
    setLoadout({
      ...loadout,
      nail: {
        ...loadout.nail,
        damage: newDamage,
        image: image,
      },
    });
  }

  /**
   * Updates `spell.damage` and `spell.icon` from loadout state
   * @param spellAlias
   * @param newDamage
   * @param icon
   */
  function updateSpell(
    spellAlias: String,
    newDamage: number,
    icon: StaticImageData
  ) {
    if (spellAlias == 'fireball' || spellAlias == 'fireballUpgrade') {
      setLoadout({
        ...loadout,
        spell: {
          ...loadout.spell,
          fireball: {
            ...loadout.spell.fireball,
            damage: newDamage,
            icon: icon,
          },
        },
      });
    } else if (spellAlias == 'dive' || spellAlias == 'diveUpgrade') {
      setLoadout({
        ...loadout,
        spell: {
          ...loadout.spell,
          dive: {
            ...loadout.spell.dive,
            damage: newDamage,
            icon: icon,
          },
        },
      });
    } else if (spellAlias == 'wraiths' || spellAlias == 'wraithsUpgrade') {
      setLoadout({
        ...loadout,
        spell: {
          ...loadout.spell,
          wraiths: {
            ...loadout.spell.wraiths,
            damage: newDamage,
            icon: icon,
          },
        },
      });
    }
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
            updateNail={updateNail}
            updateSpell={updateSpell}
          />
        </div>
        <div className={`${tabIndex == 1 ? 'block' : 'hidden'}`}>
          <h1 className="h-min p-8 text-center">Enemies</h1>
        </div>
      </section>
    </>
  );
}
