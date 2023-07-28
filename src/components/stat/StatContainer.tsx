import Image from 'next/image';

import StatBlock from '../StatBlock';

import focus from '@/assets/ui/focus.png';

import NAILART from '@/constants/nailart';

export default function StatContainer({ loadout }: { loadout: any }) {
  return (
    <section id="stats" className="w-2/6 relative">
      <h2 className="w-full">Damage</h2>
      <div className="flex flex-wrap justify-between gap-8">
        <section className="flex">
          <Image
            src={loadout.nail.image}
            alt="Nail"
            className="max-w-[50px] hidden lg:flex"
          />
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
              value={(loadout.nail.damage / loadout.nail.swingRate).toFixed(2)}
              valueSize="large"
              subValue="dps"
            />
          </StatWrapper>
        </section>
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
              >
                <h4>
                  {nailart.name[0].toUpperCase() +
                    nailart.name.slice(1, nailart.name.length) +
                    ' Slash'}
                </h4>
              </StatBlock>
            );
          })}
        </StatWrapper>
        <section className="hidden lg:flex items-center justify-center">
          <Image src={focus} alt="Focus" className="max-w-[150px]" />
        </section>
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
        <StatWrapper>
          <StatBlock
            value={loadout.soul.max}
            valueSize="medium"
            subValue="max soul"
          />
          <StatBlock
            value={loadout.soul.spellCost}
            valueSize="medium"
            subValue="soul / spell"
          />
          <StatBlock
            value={loadout.soul.regen}
            valueSize="medium"
            subValue="soul / nail hit"
          />
        </StatWrapper>
      </div>
    </section>
  );
}

// Helper component for styling StatBlocks
function StatWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-auto flex flex-col justify-center">
      <div className="min-h-max h-auto flex flex-col justify-between gap-2">
        {children}
      </div>
    </section>
  );
}
