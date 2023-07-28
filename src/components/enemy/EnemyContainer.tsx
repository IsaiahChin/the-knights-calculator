import Image from 'next/image';

import StatBlock from '../StatBlock';

import enemies from '@/data/enemies';
import { TYPE } from '@/constants/enemy';

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
    <section className="w-1/6">
      <h2>Enemies</h2>
      <div className="flex flex-wrap gap-4 justify-between">
        {enemies.map(
          (enemy) =>
            enemy.type.includes(TYPE.DREAM) && (
              <div className="w-36" key={enemy.name}>
                <h4>{toTitleCase(enemy.name)}</h4>
                <div className="enemy flex items-center gap-2">
                  <Image
                    src={enemy.icon}
                    alt={enemy.name}
                    className="icon-mask max-w-[60px]"
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
