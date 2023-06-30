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
    spellAlias: String,
    newDamage: number,
    icon: StaticImageData
  ) => void;
}) {
  return (
    <div className="flex flex-col items-center gap-8">
      <h3>{title}</h3>
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
                  updateSpell?.(spell.alias, spell.damage, spell.image)
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
