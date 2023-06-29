import StatBlock from './StatBlock';

import NAILART from '@/constants/nailart';
import Image from 'next/image';
import soulorbIcon from '@/assets/ui/soul-orb.png';

export default function StatContainer({ loadout }: { loadout: any }) {
  return (
    <>
      <div className="h-max p-4">
        <div id="stats" className="h-[70vh] flex flex-col">
          <div
            id="damage"
            className="grid grid-cols-2 gap-x-4 gap-y-12 mt-4 [&>div]:flex [&>div]:flex-col"
          >
            <div className="justify-start w-full">
              <div className="flex">
                <Image
                  src={loadout.nail.image}
                  alt="Nail"
                  className="max-w-[50px] mr-16"
                />
                <section className="min-h-max h-40 flex flex-col justify-between mt-4 gap-2">
                  <StatBlock
                    value={loadout.nail.damage}
                    valueSize="large"
                    subValue="dmg"
                  />
                  <StatBlock
                    value={loadout.nail.swingRate}
                    valueSize="large"
                    subValue="s swing speed"
                  />
                  <StatBlock
                    value={(
                      loadout.nail.damage / loadout.nail.swingRate
                    ).toFixed(2)}
                    valueSize="large"
                    subValue="dps"
                  />
                </section>
              </div>
            </div>
            <div className="justify-start w-full">
              <section className="min-h-max h-40 flex flex-col justify-between mt-4 gap-2">
                {NAILART.map((nailart, index) => {
                  return (
                    <StatBlock
                      key={index}
                      icon={nailart.icon}
                      iconAlt={nailart.name + ' slash'}
                      value={loadout.nail.damage * nailart.damageMod}
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
            <div className="jusitfy-start w-full">
              <div className="flex items-center">
                <Image
                  src={soulorbIcon}
                  alt="Soul Orb"
                  className="max-w-[100px] mr-4"
                />
                <section className="min-h-max h-40 flex flex-col justify-between mt-4 gap-2">
                  <StatBlock
                    value={loadout.soul.max}
                    valueSize="large"
                    subValue="max"
                  />
                  <StatBlock
                    value={loadout.soul.spellCost}
                    valueSize="large"
                    subValue="per spell"
                  />
                  <StatBlock
                    value={loadout.soul.regen}
                    valueSize="large"
                    subValue="regen on nail hit"
                  />
                </section>
              </div>
            </div>
            <div className="jusitfy-start w-full">
              <section className="min-h-max h-40 flex flex-col justify-between mt-4 gap-2">
                <StatBlock
                  icon={loadout.spell.fireball.icon}
                  iconAlt="fireball"
                  value={loadout.spell.fireball.damage}
                  valueSize="medium"
                  subValue="dmg"
                />
                <StatBlock
                  icon={loadout.spell.dive.icon}
                  iconAlt="dive"
                  value={loadout.spell.dive.damage}
                  valueSize="medium"
                  subValue="dmg"
                />
                <StatBlock
                  icon={loadout.spell.wraiths.icon}
                  iconAlt="wraiths"
                  value={loadout.spell.wraiths.damage}
                  valueSize="medium"
                  subValue="dmg"
                />
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
