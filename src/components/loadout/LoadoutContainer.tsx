'use client';

import { useState } from 'react';
import { StaticImageData } from 'next/image';

import CharmContainer from './CharmContainer';
import NailContainer from './NailContainer';
import SpellContainer from './SpellContainer';
import Separator from '../Separator';

import spells from '@/constants/spells';

export default function LoadoutContainer({
  updateNail,
  updateSpell,
}: {
  updateNail?: (newDamage: number, newImage: StaticImageData) => void;
  updateSpell?: (
    spellAlias: String,
    newDamage: number,
    icon: StaticImageData
  ) => void;
}) {
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
    <>
      <section>
        <CharmContainer />
      </section>
      <NailContainer updateNail={updateNail} />
      <section>
        <Separator />
        <h1 className="h-min p-8 text-center">Spells</h1>
        <div id="spell-container" className="grid grid-cols-3 justify-evenly">
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
    </>
  );
}
