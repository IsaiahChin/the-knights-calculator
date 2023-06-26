import StatBlock from './StatBlock';

import NAILART from '@/constants/nailart';

export default function StatContainer({ loadout }: { loadout: any }) {
  return (
    <>
      <h1 className="text-center">The Knight's Calculator</h1>
      <span className="h-full p-4 grid">
        <div
          id="stats"
          className="h-screen [&>div]:p-4 grid grid-cols-1 grid-rows-3"
        >
          <div id="nail">
            <h1 className="h-min pb-8">Nail</h1>
            <span className="grid grid-cols-2">
              <div className="flex flex-col justify-around">
                <StatBlock
                  value={loadout.nailDamage}
                  valueSize="large"
                  subValue=" dmg"
                />
                <StatBlock
                  value={loadout.nailSwingRate}
                  valueSize="large"
                  subValue=" s swing speed"
                />
                <StatBlock
                  value={(loadout.nailDamage / loadout.nailSwingRate).toFixed(
                    2
                  )}
                  valueSize="large"
                  subValue=" dps"
                />
              </div>
              <div className="flex flex-col justify-around">
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
    </>
  );
}
