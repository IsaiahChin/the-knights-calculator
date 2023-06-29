'use client';

import { useState } from 'react';
import { StaticImageData } from 'next/image';

import ImageButton from '../ImageButton';

import knight from '@/data/knight';
import * as NailAssets from '@/assets/ui/loadout/nail';

export default function NailContainer({
  updateNail,
}: {
  updateNail?: (newDamage: number, image: StaticImageData) => void;
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

  function handleNailSelection(nailIndex: number) {
    const updatedNails = nails.map((nail, index) => ({
      ...nail,
      selected: index === nailIndex,
    }));

    setNails(updatedNails);
    setCurrentNail(updatedNails[nailIndex].name);
  }

  return (
    <section>
      <h1 className="h-min p-8 text-center">{currentNail}</h1>
      <div id="nail-container" className="flex flex-wrap justify-evenly gap-4">
        {nails.map((nail: any, index: number) => {
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
  );
}
