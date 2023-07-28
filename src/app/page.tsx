'use client';

import { useState } from 'react';
import { StaticImageData } from 'next/image';

import StatContainer from '@/components/stat/StatContainer';
import EnemyContainer from '@/components/enemy/EnemyContainer';
import LoadoutContainer from '@/components/loadout/LoadoutContainer';

import { oldNail } from '@/assets/ui/loadout/nail';
import knight from '@/data/knight';
import spells from '@/constants/spells';

export default function Home() {
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

  /**
   * Updates `nail.damage` and `nail.image` from loadout state
   * @param newDamage
   */
  function updateNail(newDamage: number, newImage: StaticImageData) {
    setLoadout({
      ...loadout,
      nail: {
        ...loadout.nail,
        damage: newDamage,
        image: newImage,
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
    <div className="flex gap-4 relative">
      <EnemyContainer />
      <StatContainer loadout={loadout} />
      <LoadoutContainer updateNail={updateNail} updateSpell={updateSpell} />
    </div>
  );
}
