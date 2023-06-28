'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import InfoIcon from '@/assets/meta/InfoIcon';
import CloseIcon from '@/assets/meta/CloseIcon';
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
        } fixed top-0 left-0 z-40 w-full h-full bg-zinc-950 bg-opacity-95 backdrop-blur-sm flex justify-center items-center`}
      >
        <div id="center" className="text-center w-1/3 h-1/2">
          <div id="info-box" className="flex flex-col items-center">
            <Image src={pauseTopFleur} alt="" className="max-w-[350px]" />
            <h1 className="w-max my-4">The Knight's Calculator</h1>
            <p className="w-max h-32">
              A damage analysis tool for Hollow Knight
            </p>
            <p className="w-max [&_a]:underline [&_a]:underline-offset-2 text-xs">
              Built by{' '}
              <Link href="https://www.isaiahchin.com/" target="_blank">
                Isaiah
              </Link>
              .{' '}
              <Link href="https://www.hollowknight.com/" target="_blank">
                Hollow Knight
              </Link>{' '}
              by{' '}
              <Link href="https://www.teamcherry.com.au/" target="_blankF">
                Team Cherry
              </Link>
              .
            </p>
            <Image src={bottomFleur} alt="" className="max-w-[250px] mt-4" />
          </div>
        </div>
      </div>
    </header>
  );
}
