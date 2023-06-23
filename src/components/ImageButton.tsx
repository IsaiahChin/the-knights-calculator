'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import selectionBorder from '@/assets/ui/selection-corner.png';

export default function ImageButton({
  image,
  altText,
  selected,
}: {
  image: StaticImageData;
  altText: string;
  selected: Boolean;
}) {
  const [isSelected, setIsSelected] = useState(selected);

  // TODO: Only one selected at a time
  function handleSelect() {
    setIsSelected((prevState) => !prevState);
  }

  return (
    <div className="relative">
      {isSelected && (
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
        onClick={handleSelect}
      >
        <Image
          src={image}
          alt={altText}
          className={`${isSelected && 'glow'}`}
        />
      </button>
    </div>
  );
}
