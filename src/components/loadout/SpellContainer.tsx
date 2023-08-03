import { StaticImageData } from 'next/image';
import ImageButton from './ImageButton';

export default function SpellContainer({
  title,
  spells,
  handleSelection,
  updateSpell,
}: {
  title: String | undefined;
  spells: Array<Object>;
  handleSelection?: Function;
  updateSpell?: (
    name: string,
    spellAlias: String,
    newDamage: number,
    icon: StaticImageData
  ) => void;
}) {
  return (
    <div className="w-auto min-w-[12rem] flex flex-col items-center gap-8">
      <h3 className="w-max">{title}</h3>
      <div className="flex flex-row gap-12">
        {spells.map((spell: any, index: any) => {
          return (
            <div className="flex flex-col items-center gap-8" key={spell.name}>
              <ImageButton
                image={spell.image}
                altText={spell.alias}
                selected={spell.selected}
                index={index}
                onClickFunction={handleSelection}
                updateSpell={() =>
                  updateSpell?.(
                    spell.name,
                    spell.alias,
                    spell.damage,
                    spell.image
                  )
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
