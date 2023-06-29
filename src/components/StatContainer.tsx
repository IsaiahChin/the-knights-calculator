import StatBlock from './StatBlock';

import NAILART from '@/constants/nailart';
import Image from 'next/image';
import soulOrb from '@/assets/ui/soul-orb.png';

export default function StatContainer({ loadout }: { loadout: any }) {
  return (
    <>
      <div className="h-max p-4">
        <div id="stats" className="h-[70vh] flex flex-col">
          <div className="grid grid-cols-2 lg:grid-cols-[0.6fr_repeat(2,_1fr)] grid-rows-2 gap-y-12 mt-4">
            <section className="hidden lg:flex items-center justify-center">
              <Image
                src={loadout.nail.image}
                alt="Nail"
                className="max-w-[50px]"
              />
            </section>
            <StatWrapper>
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
                value={(loadout.nail.damage / loadout.nail.swingRate).toFixed(
                  2
                )}
                valueSize="large"
                subValue="dps"
              />
            </StatWrapper>
            <StatWrapper>
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
            </StatWrapper>
            <section className="hidden lg:flex items-center justify-center">
              <Image src={soulOrb} alt="Soul Orb" />
            </section>
            <StatWrapper>
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
            </StatWrapper>
            <StatWrapper>
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
            </StatWrapper>
          </div>
        </div>
      </div>
    </>
  );
}

// Helper component for styling StatBlocks
function StatWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full flex flex-col justify-start">
      <div className="min-h-max h-44 flex flex-col justify-between gap-2">
        {children}
      </div>
    </section>
  );
}
