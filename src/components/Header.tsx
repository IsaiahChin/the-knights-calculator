'use client';

import { DOMElement, useEffect, useState } from 'react';
import Image from 'next/image';

import InfoIcon from '@/assets/meta/InfoIcon';
import { pauseTopFleur, bottomFleur } from '@/assets/ui/fleur';

export default function Header() {
  const [isInfoShowing, setIsInfoShowing] = useState(false);

  function handleInfoChange() {
    setIsInfoShowing(!isInfoShowing);
  }

  return (
    <header>
      <button
        type="button"
        className="z-[100] absolute top-4 right-4 p-4 cursor-pointer"
        onClick={() => handleInfoChange()}
      >
        <InfoIcon />
      </button>
      <div
        id="blur-overlay"
        className={`${
          isInfoShowing ? 'block' : 'hidden'
        } fixed top-0 left-0 z-40 w-full h-full bg-zinc-950 bg-opacity-95 backdrop-blur-sm flex justify-center items-center`}
      >
        <div id="center" className="text-center w-1/3 h-1/2 -top-[10%]">
          <div id="info-box" className="flex flex-col items-center">
            <Image
              src={pauseTopFleur}
              alt="Top Fluer"
              className="max-w-[350px]"
            />
            <h1 className="w-max mt-4">The Knight's Calculator</h1>
            <p className="h-32"></p>
            <Image
              src={bottomFleur}
              alt="Bottom Fluer"
              className="max-w-[250px]"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
