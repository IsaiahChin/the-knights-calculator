import Image from 'next/image';

import StatBlock from './StatBlock';

import NAILART from '@/constants/nailart';
import SPELLS from '@/constants/spells';

export default function StatContainer({ loadout }: { loadout: any }) {
  return (
    <>
      <div className="h-full p-4">
        <div id="stats" className="h-[70vh] flex flex-col [&>div]:p-4">
          <h1 className="h-min p-4 text-center">Damage</h1>
          <div
            id="damage"
            className="flex flex-row flex-wrap justify-between [&_div]:mt-4 [&>div]:flex [&>div]:flex-col"
          >
            <div className="justify-start">
              <h2>Nail</h2>
              <section className="min-h-max h-40 flex flex-col justify-between mt-4 gap-2">
                <StatBlock
                  value={loadout.nailDamage}
                  valueSize="large"
                  subValue="dmg"
                />
                <StatBlock
                  value={loadout.nailSwingRate}
                  valueSize="large"
                  subValue="s swing speed"
                />
                <StatBlock
                  value={(loadout.nailDamage / loadout.nailSwingRate).toFixed(
                    2
                  )}
                  valueSize="large"
                  subValue="dps"
                />
              </section>
            </div>
            <div className="justify-start">
              <h2>Nail Arts</h2>
              <section className="min-h-max h-40 flex flex-col justify-between mt-4 gap-2">
                {NAILART.map((nailart, index) => {
                  return (
                    <StatBlock
                      key={index}
                      icon={nailart.icon}
                      iconAlt={nailart.name + ' slash'}
                      value={loadout.nailDamage * nailart.damageMod}
                      valueSize="medium"
                      subValue={`dmg ${
                        nailart.name == 'cyclone'
                          ? ` * (${nailart.hits?.min} - ${nailart.hits?.max})`
                          : ''
                      }`}
                    />
                  );
                })}
              </section>
            </div>
            <div className="jusitfy-start">
              <h2>Spells</h2>
              <section className="min-h-max h-40 flex flex-col justify-between mt-4 gap-2">
                {SPELLS.map((spell, index) => {
                  if (index % 2 == 0)
                    return (
                      <StatBlock
                        key={index}
                        icon={spell.icon}
                        iconAlt={spell.name}
                        value={spell.damage}
                        valueSize="medium"
                        subValue={`dmg`}
                      />
                    );
                })}
              </section>
            </div>
          </div>
          <h1 className="h-min p-4 text-center">Soul</h1>
          <div id="soul" className="flex flex-row flex-wrap justify-between">
            <section className="w-full flex flex-row justify-between mt-4">
              <StatBlock
                value={loadout.maxSoul}
                valueSize="large"
                subValue="max"
              />
              <StatBlock
                value={loadout.spellCost}
                valueSize="large"
                subValue="per spell"
              />
              <StatBlock
                value={loadout.soulRegen}
                valueSize="large"
                subValue="gain on hit"
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
