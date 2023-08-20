import Image from 'next/image';

import StatBlock from '../StatBlock';

import enemies from '@/data/enemies';
import { TYPE } from '@/constants/enemy';
import Separator from '../Separator';

function toTitleCase(string: String) {
  var splitStr = string.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }

  return splitStr.join(' ');
}

export default function EnemyContainer() {
  return (
    <section className="w-full md:w-3/12 h-3/12 md:h-auto">
      <h1 id="enemies" className="w-full scroll-m-24">Enemies</h1>
      <Separator />
      <div className="max-h-[40vh] md:max-h-[85vh] overflow-y-auto flex flex-wrap items-center gap-4">
        {enemies.map(
          (enemy) =>
            enemy.type.includes(TYPE.BOSS) && (
              <div className="w-36" key={enemy.name}>
                <h4>{toTitleCase(enemy.name)}</h4>
                <div className="enemy flex items-center gap-2">
                  <Image
                    src={enemy.icon}
                    alt={enemy.name}
                    className="icon-mask max-w-[45px] sm:max-w-[60px]"
                  />
                  <StatBlock
                    value={enemy.health.total}
                    valueSize="medium"
                    subValue="hp"
                  />
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
}
