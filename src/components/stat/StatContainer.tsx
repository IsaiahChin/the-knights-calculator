import { StaticImageData } from 'next/image';

import StatBlock from '../StatBlock';

import NAILART from '@/constants/nailart';
import Separator from '../Separator';

export default function StatContainer({ loadout }: { loadout: any }) {
  return (
    <section
      id="stats"
      className="w-full md:w-3/12 h-5/6 md:h-auto md:relative"
    >
      <h1 className="w-full">Statistics</h1>
      <Separator />
      <h2 className="pb-2">Nail</h2>
      <div className="flex flex-wrap gap-4">
        <StatBlock
          title="DPS"
          value={(loadout.nail.damage / loadout.nail.swingRate).toFixed(2)}
          valueSize="large"
        />
        <StatBlock
          title="Nail"
          value={loadout.nail.damage}
          valueSize="medium"
          subValue="dmg"
        />
        <StatBlock
          title="Swing Speed"
          value={loadout.nail.swingRate}
          valueSize="medium"
          subValue="s"
        />
        <div className="w-full flex flex-col gap-y-4">
          {NAILART.map((nailart, index) => {
            return (
              <StatBlock
                key={index}
                title={
                  nailart.name[0].toUpperCase() +
                  nailart.name.slice(1, nailart.name.length) +
                  ' Slash'
                }
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
        </div>
      </div>
      <Separator />
      <h2 className="pb-2">Spells</h2>
      <div className="flex flex-wrap gap-4">
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
          subValue="regen"
        />
        <div className="w-full flex flex-col gap-y-4">
          {Object.values(
            loadout.spell as {
              [key: string]: {
                name: string;
                damage: number;
                icon: StaticImageData;
              };
            }
          ).map(({ name, damage, icon }) => (
            <StatBlock
              key={name}
              title={name}
              icon={icon}
              iconAlt="fireball"
              value={damage}
              valueSize="medium"
              subValue="dmg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
