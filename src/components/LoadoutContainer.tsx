'use client';

import { useState } from 'react';

import ImageButton from '@/components/ImageButton';
import * as NailAssets from '@/assets/ui/loadout/nail';

import knight from '@/data/knight';
import spells from '@/constants/spells';
import { StaticImageData } from 'next/image';

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
  const [nails, setNails] = useState([
    {
      name: 'Old Nail',
      damage: knight.nail.damage[0],
      image: NailAssets.oldNail,
      selected: true,
    },
    {
      name: 'Sharpened Nail',
      damage: knight.nail.damage[1],
      image: NailAssets.sharpenedNail,
      selected: false,
    },
    {
      name: 'Channelled Nail',
      damage: knight.nail.damage[2],
      image: NailAssets.channelledNail,
      selected: false,
    },
    {
      name: 'Coiled Nail',
      damage: knight.nail.damage[3],
      image: NailAssets.coiledNail,
      selected: false,
    },
    {
      name: 'Pure Nail',
      damage: knight.nail.damage[4],
      image: NailAssets.pureNail,
      selected: false,
    },
  ]);

  const initialNail = nails.find((nail) => nail.selected);
  const [currentNail, setCurrentNail] = useState(initialNail?.name);

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

  function handleNailSelection(nailIndex: number) {
    const updatedNails = nails.map((nail, index) => ({
      ...nail,
      selected: index === nailIndex,
    }));

    setNails(updatedNails);
    setCurrentNail(updatedNails[nailIndex].name);
  }

  function handleFireballSelection(name: String) {
    const currentSpellSelection = fireball.findIndex(
      (spell) => spell.alias == name
    );

    const newSpellSelection = {
      ...fireball[currentSpellSelection],
      selected: true,
    };

    const newFireballs = fireball.slice();
    newFireballs[currentSpellSelection] = newSpellSelection;

    newFireballs.map((spell) => {
      spell.selected = spell.alias == name;
    });

    setFireball(newFireballs);
  }

  function handleDiveSelection(name: String) {
    const currentSpellSelection = dive.findIndex(
      (spell) => spell.alias == name
    );

    const newSpellSelection = {
      ...dive[currentSpellSelection],
      selected: true,
    };

    const newDives = dive.slice();
    newDives[currentSpellSelection] = newSpellSelection;

    newDives.map((spell) => {
      spell.selected = spell.alias == name;
    });

    setDive(newDives);
  }

  function handleWraithsSelection(name: String) {
    const currentSpellSelection = wraiths.findIndex(
      (spell) => spell.alias == name
    );

    const newSpellSelection = {
      ...wraiths[currentSpellSelection],
      selected: true,
    };

    const newWraiths = wraiths.slice();
    newWraiths[currentSpellSelection] = newSpellSelection;

    newWraiths.map((spell) => {
      spell.selected = spell.alias == name;
    });

    setWraiths(newWraiths);
  }

  return (
    <>
      <section>
        <h1 className="h-min p-8 text-center">{currentNail}</h1>
        <div
          id="nail-container"
          className="flex flex-wrap gap-10 justify-evenly"
        >
          {nails.map((nail: any, index) => {
            return (
              <div className="flex flex-col items-center gap-4" key={nail.name}>
                <ImageButton
                  image={nail.image}
                  altText={nail.name}
                  selected={nail.selected}
                  nailDamage={nail.damage}
                  index={index}
                  onClickFunction={handleNailSelection}
                  updateNail={updateNail}
                />
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <h1 className="h-min p-8 text-center">Spells</h1>
        <div id="spell-container" className="grid grid-cols-3 justify-evenly">
          <div className="flex flex-col gap-8">
            {fireball.map((spell) => {
              return (
                <div
                  className="flex flex-col items-center gap-8"
                  key={spell.name}
                >
                  <h3>
                    {spell.name[0].toUpperCase() +
                      spell.name.slice(1, spell.name.length)}
                  </h3>
                  <ImageButton
                    image={spell.image}
                    altText={spell.alias}
                    selected={spell.selected}
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
          <div className="flex flex-col gap-8">
            {dive.map((spell) => {
              return (
                <div
                  className="flex flex-col items-center gap-8"
                  key={spell.name}
                >
                  <h3>
                    {spell.name[0].toUpperCase() +
                      spell.name.slice(1, spell.name.length)}
                  </h3>
                  <ImageButton
                    image={spell.image}
                    altText={spell.alias}
                    selected={spell.selected}
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
          <div className="flex flex-col gap-8">
            {wraiths.map((spell) => {
              return (
                <div
                  className="flex flex-col items-center gap-8"
                  key={spell.name}
                >
                  <h3>
                    {spell.name[0].toUpperCase() +
                      spell.name.slice(1, spell.name.length)}
                  </h3>
                  <ImageButton
                    image={spell.image}
                    altText={spell.alias}
                    selected={spell.selected}
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
      </section>
    </>
  );
}
