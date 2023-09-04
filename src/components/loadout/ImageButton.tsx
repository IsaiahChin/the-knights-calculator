import Image, { StaticImageData } from 'next/image';
import SelectionBorder from '../SelectionBorder';

export default function ImageButton({
  image,
  altText,
  selected,
  index,
  onClickFunction,
  nailDamage,
  updateNail,
  updateSpell,
}: {
  image: StaticImageData;
  altText: string;
  selected: Boolean;
  index?: number;
  onClickFunction?: Function;
  nailDamage?: number;
  updateNail?: (newId: number, newName: string, newDamage: number) => void;
  updateSpell?: Function;
}) {
  return (
    <div className="relative">
      {selected && (
        <SelectionBorder
          target={`${nailDamage != undefined ? 'nail' : ''}${
            updateSpell != undefined ? 'spell' : ''
          }`}
        />
      )}
      <button
        type="button"
        className={`relative z-10 lg:max-w-[50px] ${
          nailDamage != undefined ? 'max-w-[30px]' : 'max-w-[50px]'
        } `}
        onClick={() => {
          onClickFunction?.(index);
          if (nailDamage != undefined && index != undefined) {
            updateNail?.(index, altText, nailDamage);
          }
          updateSpell?.();
        }}
      >
        <Image src={image} alt={altText} className={`${selected && 'glow'}`} />
      </button>
    </div>
  );
}
