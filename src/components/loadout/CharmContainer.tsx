'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import Separator from '../Separator';

import CharmUIAssets from '@/assets/ui/loadout/charm-ui/';
import voidHeartCharm from '@/assets/ui/loadout/charm/40b-void-heart.png';

import CHARMS from '@/constants/charms';

export default function CharmContainer({
  equippedCharms,
  setEquippedCharms,
}: {
  equippedCharms: Array<{
    name: string;
    cost: number;
    origin: string;
    image: StaticImageData;
    effect: any;
    isEquipped: boolean;
  }>;
  setEquippedCharms: any;
}) {
  const [notches, setNotches] = useState({
    max: 11,
    active: 0,
  });

  const [charms, setCharms] = useState(
    CHARMS.map((charm) => ({
      name: charm.name,
      cost: charm.cost,
      origin: charm.origin,
      image: charm.image,
      effect: charm.effect,
      isEquipped: false,
    }))
  );

  const [isGrimmchildEquipped, setIsGrimmchildEquipped] = useState(false);
  const [isCarefreeMelodyEquipped, setIsCarefreeMelodyEquipped] =
    useState(false);

  function handleGrimmTrinketToggle(charm: any) {
    if (charm.name == 'Carefree Melody') {
      setIsCarefreeMelodyEquipped(!isCarefreeMelodyEquipped);
    }

    if (charm.name == 'Grimmchild') {
      setIsGrimmchildEquipped(!isGrimmchildEquipped);
    }
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
    let existingCharm = equippedCharms.find((charm: any) => charm.name == name);
    if (existingCharm != undefined) {
      setNotches({
        ...notches,
        active: notches.active - existingCharm.cost,
      });
      setEquippedCharms(
        equippedCharms.filter((charm: any) => charm.name != name)
      );
    }
  }

  function toggleCharmActive(name: String) {
    let charm = charms.find((charm) => charm.name == name);
    if (charm != undefined) {
      charm.isEquipped = !charm.isEquipped;
    }
  }

  function renderCharmNotches() {
    let charmNotches = [];
    if (notches.active < notches.max) {
      for (let i = 0; i < notches.max; i++) {
        charmNotches.push(
          <Image
            key={i}
            src={
              i < notches.active
                ? CharmUIAssets.notchLit
                : CharmUIAssets.notchUnlit
            }
            alt={i < notches.active ? 'Lit' : '' + ' Charm Notch'}
            className="max-w-[35px]"
          />
        );
      }
    } else {
      for (let i = 0; i < notches.active; i++) {
        charmNotches.push(
          i < notches.max ? (
            <Image
              key={i}
              src={
                i < notches.active
                  ? CharmUIAssets.notchLit
                  : CharmUIAssets.notchUnlit
              }
              alt={i < notches.active ? 'Lit' : '' + ' Charm Notch'}
              className="max-w-[35px]"
            />
          ) : (
            <Image
              key={i}
              src={CharmUIAssets.notchOvercharm}
              alt="Overcharmed Notch"
              className="max-w-[35px]"
            />
          )
        );
      }
    }
    return charmNotches;
  }

  return (
    <>
      <div id="equipped-charms">
        <h2 className={notches.active > notches.max ? 'text-[#e676cf]' : ''}>
          {notches.active > notches.max ? 'OVERCHARMED' : 'Equipped'}
        </h2>
        <div className="flex flex-wrap py-4 items-center gap-2 gap-y-4 [&>*]:mr-[10px] relative">
          {notches.active > notches.max && (
            <Image
              src={CharmUIAssets.overcharmedBackboard}
              alt=""
              className="block md:hidden lg:block absolute z-10"
            />
          )}
          <Image
            src={voidHeartCharm}
            alt="Void Heart"
            className="max-w-[47px] sm:max-w-[65px] relative z-20"
          />
          {equippedCharms.map((charm: any, index: number) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                unequipCharm(charm.name);
                toggleCharmActive(charm.name);
                handleGrimmTrinketToggle(charm);
              }}
            >
              <Image
                src={charm.image}
                alt={charm.name}
                className="relative max-w-[47px] sm:max-w-[65px] z-20"
              />
            </button>
          ))}
          {notches.active < notches.max && (
            <Image
              src={CharmUIAssets.charmNotch}
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
      <div
        id="charm-container"
        className="max-w-[40rem] mx-auto flex flex-wrap items-center justify-center gap-2"
      >
        {charms.map((charm, charmIndex) => (
          <button
            key={charmIndex}
            type="button"
            onClick={() => {
              if (charm.isEquipped) {
                unequipCharm(charm.name);
                toggleCharmActive(charm.name);
                handleGrimmTrinketToggle(charm);
              } else if (notches.active < notches.max) {
                if (isCarefreeMelodyEquipped && charm.name == 'Grimmchild') {
                } else if (
                  isGrimmchildEquipped &&
                  charm.name == 'Carefree Melody'
                ) {
                } else {
                  equipCharm(charm.name);
                  toggleCharmActive(charm.name);
                  handleGrimmTrinketToggle(charm);
                }
              }
            }}
          >
            <Image
              src={charm.image}
              alt={charm.name}
              className={`max-w-[50px] md:max-w-[60px] w-auto ${
                charm.isEquipped ? 'opacity-20 glow' : 'opacity-100'
              } ${
                charm.name == 'Carefree Melody' && isGrimmchildEquipped
                  ? 'opacity-20 cursor-not-allowed'
                  : ''
              }${
                charm.name == 'Grimmchild' && isCarefreeMelodyEquipped
                  ? 'opacity-20 cursor-not-allowed'
                  : ''
              }`}
            />
          </button>
        ))}
      </div>
    </>
  );
}
