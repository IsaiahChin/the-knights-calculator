'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import Separator from '../Separator';

import {
  overcharmedBackboard,
  charmNotch,
  notchUnlit,
  notchLit,
} from '@/assets/ui/loadout/charm-ui/';

import CHARMS from '@/constants/charms';

export default function CharmContainer() {
  const [charms, setCharms] = useState(
    CHARMS.map((charm) => ({
      name: charm.name,
      cost: charm.cost,
      origin: charm.origin,
      image: charm.image,
      isEquipped: false,
    }))
  );

  const [notches, setNotches] = useState({
    max: 11,
    active: 0,
  });

  const [equippedCharms, setEquippedCharms] = useState<
    Array<{
      name: string;
      cost: number;
      origin: string;
      image: StaticImageData;
      isEquipped: boolean;
    }>
  >([]);

  function renderCharmNotches() {
    let charmNotches = [];
    for (let i = 0; i < notches.max; i++) {
      charmNotches.push(
        <Image
          key={i}
          src={i < notches.active ? notchLit : notchUnlit}
          alt={i < notches.active ? 'Lit' : '' + ' Charm Notch'}
          className="max-w-[35px]"
        />
      );
    }
    return charmNotches;
  }

  function equipCharm(name: String) {
    let newCharm = charms.find((charm) => charm.name == name);
    if (newCharm != undefined) {
      setNotches({
        ...notches,
        active: notches.active + newCharm.cost,
      });
      setEquippedCharms([...equippedCharms, newCharm]);
    }
  }

  function unequipCharm(name: String) {
    let existingCharm = equippedCharms.find((charm) => charm.name == name);
    if (existingCharm != undefined) {
      setNotches({
        ...notches,
        active: notches.active - existingCharm.cost,
      });
      setEquippedCharms(equippedCharms.filter((charm) => charm.name != name));
    }
  }

  function toggleCharmActive(name: String) {
    let charm = charms.find((charm) => charm.name == name);
    if (charm != undefined) {
      charm.isEquipped = !charm.isEquipped;
    }
  }

  return (
    <>
      <div id="equipped-charms">
        <h2 className={notches.active > notches.max ? 'text-[#e676cf]' : ''}>
          {notches.active > notches.max ? 'OVERCHARMED' : 'Equipped'}
        </h2>
        <div className="flex flex-wrap py-4 items-center gap-4 [&>*]:mr-[10px]">
          {notches.active > notches.max && (
            <Image
              src={overcharmedBackboard}
              alt=""
              className="absolute -z-10"
            />
          )}
          <Image
            src={charms[charms.length - 1].image}
            alt={charms[charms.length - 1].name}
            className="max-w-[70px]"
          />
          {equippedCharms.map((charm, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                unequipCharm(charm.name);
                toggleCharmActive(charm.name);
              }}
            >
              <Image
                src={charm.image}
                alt={charm.name}
                className="max-w-[70px] cursor-pointer"
              />
            </button>
          ))}
          {notches.active < notches.max && (
            <Image
              src={charmNotch}
              alt="Charm Notch"
              className="max-w-[30px]"
            />
          )}
        </div>
      </div>
      <div id="notch-container" className="flex flex-col">
        <h3 className="mb-4">Notches</h3>
        <div className="flex flex-wrap gap-2">{renderCharmNotches()}</div>
      </div>
      <Separator />
      <div id="charm-container" className="flex flex-wrap items-center gap-8">
        {charms.map((charm, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              if (charm.isEquipped) {
                unequipCharm(charm.name);
                toggleCharmActive(charm.name);
              } else {
                if (notches.active < notches.max) {
                  equipCharm(charm.name);
                  toggleCharmActive(charm.name);
                }
              }
            }}
          >
            <Image
              src={charm.image}
              alt={charm.name}
              className={`max-w-[60px] ${
                charm.isEquipped ? 'opacity-20' : 'opacity-100'
              }`}
            />
          </button>
        ))}
      </div>
    </>
  );
}
