'use client';

import { useState } from 'react';
import { StaticImageData } from 'next/image';

import ImageButton from './ImageButton';

import NAILS from '@/constants/nails';

export default function NailContainer({
  updateNail,
}: {
  updateNail?: (
    newName: string,
    newDamage: number,
    newImage: StaticImageData
  ) => void;
}) {
  const [nails, setNails] = useState([
    {
      name: NAILS[0].name,
      damage: NAILS[0].damage,
      image: NAILS[0].image,
      selected: true,
    },
    {
      name: NAILS[1].name,
      damage: NAILS[1].damage,
      image: NAILS[1].image,
      selected: false,
    },
    {
      name: NAILS[2].name,
      damage: NAILS[2].damage,
      image: NAILS[2].image,
      selected: false,
    },
    {
      name: NAILS[3].name,
      damage: NAILS[3].damage,
      image: NAILS[3].image,
      selected: false,
    },
    {
      name: NAILS[4].name,
      damage: NAILS[4].damage,
      image: NAILS[4].image,
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
    <>
      <h2 className="w-max mx-auto pb-4">{currentNail}</h2>
      <div
        id="nail-container"
        className="flex flex-wrap gap-x-16 px-12 justify-evenly"
      >
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
    </>
  );
}
