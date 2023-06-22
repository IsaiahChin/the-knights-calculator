'use client';

import { useContext, useState } from 'react';
import StatBlock from './StatBlock';

import knight from '@/data/knight';
import NAILART from '@/constants/nailart';
import { LoadoutContext } from '@/context/LoadoutContext';

export default function LoadoutContainer() {
  const [loadout, setLoadout] = useState(useContext(LoadoutContext));

  return (
    <div
      id="loadout-container"
      className="w-2/5 h-full p-4 flex flex-col justify-between"
    >
      <span className="h-full p-4 grid">
        <div
          id="stats"
          className="h-screen [&>div]:p-4 grid grid-cols-1 grid-rows-3"
        >
          <div id="nail">
            <h1 className="h-min pb-8">Nail</h1>
            <span className="grid grid-cols-2">
              <div className="flex flex-col justify-around">
                <LoadoutContext.Provider value={loadout}>
                  <StatBlock
                    value={loadout.damage}
                    valueSize="large"
                    subValue=" dmg"
                  />
                  <StatBlock
                    value={loadout.fireRate}
                    valueSize="large"
                    subValue=" s swing speed"
                  />
                  <StatBlock
                    value={(loadout.damage / loadout.fireRate).toFixed(2)}
                    valueSize="large"
                    subValue=" dps"
                  />
                </LoadoutContext.Provider>
              </div>
              <div className="flex flex-col justify-around">
                {NAILART.map((nailart, index) => {
                  return (
                    <StatBlock
                      key={index}
                      icon={nailart.icon}
                      iconAlt={nailart.name + ' slash'}
                      value={knight.nail.damage[0] * nailart.damageMod}
                      valueSize="medium"
                      subValue={`dmg ${
                        nailart.name == 'cyclone'
                          ? ` * (${nailart.hits?.min} - ${nailart.hits?.max})`
                          : ''
                      }`}
                    />
                  );
                })}
              </div>
            </span>
          </div>
          <div id="soul">
            <h1 className="h-min pb-8">Soul</h1>
          </div>
          <div id="other">
            <h1 className="h-min pb-8">Other</h1>
          </div>
        </div>
      </span>
    </div>
  );
}
