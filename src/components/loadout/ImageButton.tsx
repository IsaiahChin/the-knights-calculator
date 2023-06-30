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
  updateNail?: (newDamage: number, newImage: StaticImageData) => void;
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
        className="relative z-[2] max-w-[50px]"
        onClick={() => {
          onClickFunction?.(index);
          if (nailDamage != undefined) {
            updateNail?.(nailDamage, image);
          }
          updateSpell?.();
        }}
      >
        <Image src={image} alt={altText} className={`${selected && 'glow'}`} />
      </button>
    </div>
  );
}
