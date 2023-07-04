'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import InfoIcon from '@/assets/meta/InfoIcon';
import CloseIcon from '@/assets/meta/CloseIcon';
import GithubIcon from '@/assets/meta/GithubIcon';
import { pauseTopFleur, bottomFleur } from '@/assets/ui/fleur';

export default function Header() {
  const [isInfoShowing, setIsInfoShowing] = useState(false);

  function handleInfoChange() {
    setIsInfoShowing(!isInfoShowing);
  }

  useEffect(() => {
    document.getElementsByTagName('body')[0].style.overflowY = isInfoShowing
      ? 'hidden'
      : '';
  });

  return (
    <header>
      <button
        type="button"
        className="z-[100] absolute top-4 right-4 p-4 cursor-pointer"
        onClick={() => handleInfoChange()}
      >
        {isInfoShowing ? <CloseIcon /> : <InfoIcon />}
      </button>
      <div
        id="blur-overlay"
        className={`${
          isInfoShowing ? 'block' : 'hidden'
        } fixed top-0 left-0 z-40 w-screen h-screen bg-zinc-950 bg-opacity-95 backdrop-blur-sm flex justify-center items-center`}
      >
        <div
          id="center"
          className="w-1/3 h-full flex flex-col text-center justify-center"
        >
          <div id="info-box" className="flex flex-col items-center">
            <Image src={pauseTopFleur} alt="" className="max-w-[350px]" />
            <h1 className="w-max my-4">The Knight's Calculator</h1>
            <p className="w-max h-32">
              A damage analysis tool for Hollow Knight
            </p>
            <Link
              href="https://github.com/IsaiahChin/the-knights-calculator"
              target="_blank"
              className="flex gap-2 items-center p-2 border-white border-2 rounded-lg"
            >
              <GithubIcon />
              Source
            </Link>
            <Image src={bottomFleur} alt="" className="max-w-[250px] mt-4" />
          </div>
        </div>
      </div>
    </header>
  );
}
