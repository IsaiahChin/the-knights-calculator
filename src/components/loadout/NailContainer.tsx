'use client';

import { useState } from 'react';

import ImageButton from './ImageButton';

import NAILS from '@/constants/nails';

export default function NailContainer({
  updateNail,
}: {
  updateNail?: (newId: number, newName: string, newDamage: number) => void;
}) {
  const [nails, setNails] = useState(
    NAILS.map((nail, index) => ({
      name: nail.name,
      damage: nail.damage,
      image: nail.image,
      selected: index == 0,
    }))
  );

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
      <h2 className="w-max pb-4">{currentNail}</h2>
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
