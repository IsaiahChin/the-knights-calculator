'use client';

import { useState } from 'react';
import { StaticImageData } from 'next/image';

import StatContainer from '@/components/stat/StatContainer';
import EnemyContainer from '@/components/enemy/EnemyContainer';
import LoadoutContainer from '@/components/loadout/LoadoutContainer';

import knight from '@/data/knight';
import spells from '@/constants/spells';
import nails from '@/constants/nails';

export default function Home() {
  const [loadout, setLoadout] = useState({
    health: {
      max: knight.health.max,
      min: knight.health.min,
    },
    nail: {
      name: nails[0].name,
      damage: nails[0].damage,
      swingRate: knight.nail.rate,
      image: nails[0].image,
    },
    soul: {
      max: knight.soul.max,
      spellCost: knight.soul.cost,
      regen: knight.nail.soulRegen,
    },
    spell: {
      fireball: {
        name: spells[0].name,
        damage: spells[0].damage,
        icon: spells[0].icon,
      },
      dive: {
        name: spells[2].name,
        damage: spells[2].damage,
        icon: spells[2].icon,
      },
      wraiths: {
        name: spells[4].name,
        damage: spells[4].damage,
        icon: spells[4].icon,
      },
    },
    charm: {},
  });

  /**
   * Updates `nail.name`, `nail.damage` and `nail.image` from loadout state
   * @param newDamage
   */
  function updateNail(
    newName: string,
    newDamage: number,
    newImage: StaticImageData
  ) {
    setLoadout({
      ...loadout,
      nail: {
        ...loadout.nail,
        name: newName,
        damage: newDamage,
        image: newImage,
      },
    });
  }

  /**
   * Updates `spell` object from loadout state
   * @param spellAlias
   * @param newDamage
   * @param icon
   */
  function updateSpell(
    name: string,
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
            name: name,
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
            name: name,
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
            name: name,
            damage: newDamage,
            icon: icon,
          },
        },
      });
    }
  }

  return (
    <div className="w-auto mx-auto flex flex-col md:flex-row gap-y-10 md:gap-4 pb-8 justify-center">
      <EnemyContainer />
      <StatContainer loadout={loadout} />
      <LoadoutContainer updateNail={updateNail} updateSpell={updateSpell} />
    </div>
  );
}
