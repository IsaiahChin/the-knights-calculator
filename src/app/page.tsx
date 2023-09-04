'use client';

import { useState } from 'react';
import { StaticImageData } from 'next/image';

import StatContainer from '@/components/stat/StatContainer';
import EnemyContainer from '@/components/enemy/EnemyContainer';
import LoadoutContainer from '@/components/loadout/LoadoutContainer';
import CharmContainer from '@/components/loadout/CharmContainer';

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
      id: 0,
      name: nails[0].name,
      damage: nails[0].damage,
      swingRate: knight.nail.rate,
    },
    soul: {
      max: knight.soul.max,
      spellCost: knight.soul.cost,
      regen: knight.nail.soulRegen,
    },
    spell: {
      fireball: {
        name: spells[0].name,
        damage: spells[0].damage.value * spells[0].damage.amount,
        icon: spells[0].icon,
      },
      dive: {
        name: spells[2].name,
        damage: spells[2].damage.value * spells[2].damage.amount,
        icon: spells[2].icon,
      },
      wraiths: {
        name: spells[4].name,
        damage: spells[4].damage.value * spells[4].damage.amount,
        icon: spells[4].icon,
      },
    },
  });

  const [equippedCharms, setEquippedCharms] = useState<
    Array<{
      name: string;
      cost: number;
      origin: string;
      image: StaticImageData;
      effect: any;
      isEquipped: boolean;
    }>
  >([]);

  /**
   * Updates `nail.name` and `nail.damage` from loadout state
   * @param newDamage
   */
  function updateNail(newId: number, newName: string, newDamage: number) {
    setLoadout({
      ...loadout,
      nail: {
        ...loadout.nail,
        id: newId,
        name: newName,
        damage: newDamage,
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
    <div className="[&>section]:max-w-2xl w-auto flex flex-col md:flex-row gap-y-10 md:gap-4 pb-8 justify-center">
      <EnemyContainer loadout={loadout} />
      <StatContainer loadout={loadout} equippedCharms={equippedCharms} />
      <LoadoutContainer
        updateNail={updateNail}
        updateSpell={updateSpell}
        charmContainer={
          <CharmContainer
            equippedCharms={equippedCharms}
            setEquippedCharms={setEquippedCharms}
          />
        }
      />
    </div>
  );
}
