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
        <div className="absolute z-[1] inset-[0px_-20px]">
          <div
            className="selection-corner top-0 left-0"
            style={{ backgroundImage: `url(${selectionBorder.src})` }}
          ></div>
          <div
            className="selection-corner top-0 right-0 rotate-90"
            style={{ backgroundImage: `url(${selectionBorder.src})` }}
          ></div>
          <div
            className="selection-corner bottom-0 left-0 rotate-180"
            style={{ backgroundImage: `url(${selectionBorder.src})` }}
          ></div>
          <div
            className="selection-corner bottom-0 right-0 -rotate-90"
            style={{ backgroundImage: `url(${selectionBorder.src})` }}
          ></div>
        </div>
      )}
      <button
        type="button"
        className="relative z-[2] max-w-[50px] cursor-pointer"
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
