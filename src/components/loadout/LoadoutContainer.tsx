'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import NailContainer from './NailContainer';
import SpellContainer from './SpellContainer';
import Separator from '../Separator';

import nailIcon from '@/assets/ui/nail-icon.png';
import soulOrb from '@/assets/ui/soul-orb.png';
import charmNotch from '@/assets/ui/charm-notch.png';

import spells from '@/constants/spells';

export default function LoadoutContainer({
  updateNail,
  updateSpell,
  charmContainer,
}: {
  updateNail?: (newName: string, newDamage: number) => void;
  updateSpell?: (
    name: string,
    spellAlias: String,
    newDamage: number,
    icon: StaticImageData
  ) => void;
  charmContainer: any;
}) {
  const [tabIndex, setTabIndex] = useState(0);

  function handleTabChange(index: number) {
    setTabIndex(index);
  }

  const loadoutButtons = [
    { id: 0, name: 'Charms', icon: charmNotch },
    { id: 1, name: 'Spells', icon: soulOrb },
    { id: 2, name: 'Nails', icon: nailIcon },
  ];

  const [fireball, setFireball] = useState([
    {
      name: spells[0].name,
      alias: spells[0].alias,
      damage: spells[0].damage,
      image: spells[0].icon,
      selected: true,
    },
    {
      name: spells[1].name,
      alias: spells[1].alias,
      damage: spells[1].damage,
      image: spells[1].icon,
      selected: false,
    },
  ]);

  const [dive, setDive] = useState([
    {
      name: spells[2].name,
      alias: spells[2].alias,
      damage: spells[2].damage,
      image: spells[2].icon,
      selected: true,
    },
    {
      name: spells[3].name,
      alias: spells[3].alias,
      damage: spells[3].damage,
      image: spells[3].icon,
      selected: false,
    },
  ]);

  const [wraiths, setWraiths] = useState([
    {
      name: spells[4].name,
      alias: spells[4].alias,
      damage: spells[4].damage,
      image: spells[4].icon,
      selected: true,
    },
    {
      name: spells[5].name,
      alias: spells[5].alias,
      damage: spells[5].damage,
      image: spells[5].icon,
      selected: false,
    },
  ]);

  const initialFireball = fireball.find((spell) => spell.name);
  const [currentFireball, setCurrentFireball] = useState(initialFireball?.name);

  const initialDive = dive.find((spell) => spell.name);
  const [currentDive, setCurrentDive] = useState(initialDive?.name);

  const initialWraiths = wraiths.find((spell) => spell.name);
  const [currentWraiths, setCurrentWraiths] = useState(initialWraiths?.name);

  function handleFireballSelection(spellIndex: number) {
    const updatedFireball = fireball.map((spell, index) => ({
      ...spell,
      selected: index === spellIndex,
    }));

    setFireball(updatedFireball);
    setCurrentFireball(updatedFireball[spellIndex].name);
  }

  function handleDiveSelection(spellIndex: number) {
    const updatedDive = dive.map((spell, index) => ({
      ...spell,
      selected: index === spellIndex,
    }));

    setDive(updatedDive);
    setCurrentDive(updatedDive[spellIndex].name);
  }

  function handleWraithsSelection(spellIndex: number) {
    const updatedWraiths = wraiths.map((spell, index) => ({
      ...spell,
      selected: index === spellIndex,
    }));

    setWraiths(updatedWraiths);
    setCurrentWraiths(updatedWraiths[spellIndex].name);
  }

  return (
    <section className="w-full md:w-5/12 h-5/6 md:h-auto">
      <h1 id="loadout" className="w-full scroll-m-32">
        Loadout
      </h1>
      <nav className="flex flex-wrap gap-2 mt-4" aria-label="Loadout Menu">
        {loadoutButtons.map((button) => (
          <button
            key={button.id}
            type="button"
            className={`flex gap-2 items-center rounded-lg lg:rounded-t-lg lg:rounded-b-none border-2 border-zinc-100/50 lg:border-b-0 px-2 py-1 hover:opacity-100 hover:border-zinc-50/100 ${
              button.id == tabIndex
                ? 'border-zinc-100/80 opacity-100'
                : 'opacity-60'
            }`}
            onClick={() => handleTabChange(button.id)}
          >
            <Image
              src={button.icon}
              alt={button.name}
              className="max-w-[35px] md:max-w-[40px]"
            />
            <span>{button.name}</span>
          </button>
        ))}
      </nav>
      <Separator className="lg:mt-0" />
      <section className={`${tabIndex == 0 ? 'contents' : 'hidden'}`}>
        {charmContainer}
      </section>
      <section className={`${tabIndex == 1 ? 'contents' : 'hidden'}`}>
        <div id="spell-container" className="flex flex-wrap gap-8">
          <SpellContainer
            title={currentFireball}
            spells={fireball}
            handleSelection={handleFireballSelection}
            updateSpell={updateSpell}
          />
          <SpellContainer
            title={currentDive}
            spells={dive}
            handleSelection={handleDiveSelection}
            updateSpell={updateSpell}
          />
          <SpellContainer
            title={currentWraiths}
            spells={wraiths}
            handleSelection={handleWraithsSelection}
            updateSpell={updateSpell}
          />
        </div>
      </section>
      <section className={`${tabIndex == 2 ? 'contents' : 'hidden'}`}>
        <NailContainer updateNail={updateNail} />
      </section>
    </section>
  );
}
