'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import CharmContainer from './CharmContainer';
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
}: {
  updateNail?: (newDamage: number, newImage: StaticImageData) => void;
  updateSpell?: (
    name: string,
    spellAlias: String,
    newDamage: number,
    icon: StaticImageData
  ) => void;
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
    <section className="w-5/12">
      <Separator />
      <nav className="flex flex-wrap justify-start lg:justify-center gap-4">
        {loadoutButtons.map((button) => (
          <button
            key={button.id}
            type="button"
            className="flex gap-2 items-center group"
            onClick={() => handleTabChange(button.id)}
          >
            <Image
              src={button.icon}
              alt={button.name}
              className="max-w-[50px]"
            />
            <span
              className={`decoration-2 underline-offset-[6px] ${
                button.id == tabIndex ? 'underline' : ''
              } group-hover:underline`}
            >
              {button.name}
            </span>
          </button>
        ))}
      </nav>
      <Separator />
      <section className={`${tabIndex == 0 ? 'contents' : 'hidden'}`}>
        <CharmContainer />
      </section>
      <section className={`${tabIndex == 1 ? 'contents' : 'hidden'}`}>
        <div
          id="spell-container"
          className="flex flex-col justify-between gap-4"
        >
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
