'use client';

import Image, { StaticImageData } from 'next/image';
import selectionBorder from '@/assets/ui/selection-corner.png';

export default function ImageButton({
  image,
  altText,
  selected,
  onClickFunction,
  nailDamage,
  updateNailDamage,
}: {
  image: StaticImageData;
  altText: string;
  selected: Boolean;
  onClickFunction: Function;
  nailDamage?: number;
  updateNailDamage?: (newDamage: number) => void;
}) {
  return (
    <div className="relative">
      {selected && (
        <div className="absolute z-[1] inset-[-35px]">
          <Image
            className="selection-corner top-0 left-0"
            src={selectionBorder}
            alt=""
          ></Image>
          <Image
            className="selection-corner top-0 right-0 rotate-90"
            src={selectionBorder}
            alt=""
          ></Image>
          <Image
            className="selection-corner bottom-0 right-0 rotate-180"
            src={selectionBorder}
            alt=""
          ></Image>
          <Image
            className="selection-corner bottom-0 left-0 -rotate-90"
            src={selectionBorder}
            alt=""
          ></Image>
        </div>
      )}
      <button
        type="button"
        className="relative z-[2] max-w-[50px]"
        onClick={() => {
          onClickFunction(altText);
          if (nailDamage != null) {
            updateNailDamage?.(nailDamage);
          }
        }}
      >
        <Image src={image} alt={altText} className={`${selected && 'glow'}`} />
      </button>
    </div>
  );
}
