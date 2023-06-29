import Image, { StaticImageData } from 'next/image';
import SelectionBorder from './SelectionBorder';

export default function ImageButton({
  image,
  altText,
  selected,
  index,
  onClickFunction,
  nailDamage,
  updateNail,
  spellAlias,
  spellDamage,
  spellIcon,
  updateSpell,
}: {
  image: StaticImageData;
  altText: string;
  selected: Boolean;
  index?: number;
  onClickFunction?: Function;
  nailDamage?: number;
  updateNail?: (newDamage: number, image: StaticImageData) => void;
  spellAlias?: String;
  spellDamage?: number;
  spellIcon?: StaticImageData;
  updateSpell?: (
    spellAlias: String,
    newDamage: number,
    icon: StaticImageData
  ) => void;
}) {
  return (
    <div className="relative">
      {selected && (
        <SelectionBorder
          target={`${nailDamage != undefined ? 'nail' : ''}${
            spellDamage != undefined ? 'spell' : ''
          }`}
        />
      )}
      <button
        type="button"
        className="relative z-[2] max-w-[50px]"
        onClick={() => {
          onClickFunction?.(index);
          if (nailDamage != undefined) {
            updateNail?.(nailDamage, image);
          }
          if (
            spellDamage != undefined &&
            spellAlias != undefined &&
            spellIcon != undefined
          ) {
            updateSpell?.(spellAlias, spellDamage, spellIcon);
          }
        }}
      >
        <Image src={image} alt={altText} className={`${selected && 'glow'}`} />
      </button>
    </div>
  );
}
