'use client';

import { useState } from 'react';

import ImageButton from '@/components/ImageButton';
import * as NailAssets from '@/assets/ui/loadout/nail';

export default function LoadoutContainer({ loadout }: { loadout: any }) {
  const [nails, setNails] = useState([
    { name: 'old', image: NailAssets.oldNail, selected: true },
    { name: 'sharpened', image: NailAssets.sharpenedNail, selected: false },
    { name: 'channelled', image: NailAssets.channelledNail, selected: false },
    { name: 'coiled', image: NailAssets.coiledNail, selected: false },
    { name: 'pure', image: NailAssets.pureNail, selected: false },
  ]);

  function handleNailSelection(name: String) {
    // Get index of selected nail
    const currentNailSelection = nails.findIndex((nail) => nail.name == name);

    // Set selected to true
    const newNailSelection = { ...nails[currentNailSelection], selected: true };

    // Copy nails and update the newly selected nail
    const newNails = nails.slice();
    newNails[currentNailSelection] = newNailSelection;

    // Make sure only one nail is selected
    newNails.map((nail) => {
      nail.selected = nail.name == name;
    });

    setNails(newNails);
  }

  return (
    <>
      <h2 className="text-center pb-8">Nail Upgrades</h2>
      <div id="nail-container" className="flex flex-wrap gap-10 justify-evenly">
        {nails.map((nail: any) => {
          return (
            <span className="flex flex-col items-center gap-4" key={nail.name}>
              <h3>
                {nail.name[0].toUpperCase() +
                  nail.name.slice(1, nail.name.length)}
              </h3>
              <ImageButton
                image={nail.image}
                altText={nail.name}
                selected={nail.selected}
                onClickFunction={handleNailSelection}
              />
            </span>
          );
        })}
      </div>
    </>
  );
}