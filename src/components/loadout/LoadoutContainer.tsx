'use client';

import { useState } from 'react';

import ImageButton from '@/components/ImageButton';

import spells from '@/constants/spells';
import { StaticImageData } from 'next/image';
import NailContainer from './NailContainer';

export default function LoadoutContainer({
  updateNail,
  updateSpell,
}: {
  updateNail?: (newDamage: number, image: StaticImageData) => void;
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
      <NailContainer updateNail={updateNail} />
      <section>
        <h1 className="h-min p-8 text-center">Spells</h1>
        <div id="spell-container" className="grid grid-cols-3 justify-evenly">
          <div className="flex flex-col items-center gap-8">
            <h3>{currentFireball}</h3>
            <div className="flex flex-row gap-12">
              {fireball.map((spell, index) => {
                return (
                  <div
                    className="flex flex-col items-center gap-8"
                    key={spell.name}
                  >
                    <ImageButton
                      image={spell.image}
                      altText={spell.alias}
                      selected={spell.selected}
                      index={index}
                      onClickFunction={handleFireballSelection}
                      spellAlias={spell.alias}
                      spellDamage={spell.damage}
                      spellIcon={spell.image}
                      updateSpell={updateSpell}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-center gap-8">
            <h3>{currentDive}</h3>
            <div className="flex flex-row gap-12">
              {dive.map((spell, index) => {
                return (
                  <div
                    className="flex flex-col items-center gap-8"
                    key={spell.name}
                  >
                    <ImageButton
                      image={spell.image}
                      altText={spell.alias}
                      selected={spell.selected}
                      index={index}
                      onClickFunction={handleDiveSelection}
                      spellAlias={spell.alias}
                      spellDamage={spell.damage}
                      spellIcon={spell.image}
                      updateSpell={updateSpell}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-center gap-8">
            <h3>{currentWraiths}</h3>
            <div className="flex flex-row gap-12">
              {wraiths.map((spell, index) => {
                return (
                  <div
                    className="flex flex-col items-center gap-8"
                    key={spell.name}
                  >
                    <ImageButton
                      image={spell.image}
                      altText={spell.alias}
                      selected={spell.selected}
                      index={index}
                      onClickFunction={handleWraithsSelection}
                      spellAlias={spell.alias}
                      spellDamage={spell.damage}
                      spellIcon={spell.image}
                      updateSpell={updateSpell}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
