'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import InfoIcon from '@/assets/meta/InfoIcon';
import CloseIcon from '@/assets/meta/CloseIcon';
import GithubIcon from '@/assets/meta/GithubIcon';
import { pauseTopFleur, bottomFleur } from '@/assets/ui/fleur';

export default function Info() {
  const [isInfoShowing, setIsInfoShowing] = useState(false);

  function handleInfoChange() {
    setIsInfoShowing(!isInfoShowing);
  }

  return (
    <>
      <button
        type="button"
        className="z-[100] p-4"
        onClick={() => handleInfoChange()}
      >
        {isInfoShowing ? <CloseIcon /> : <InfoIcon />}
      </button>
      <div
        id="info-overlay"
        className={`${
          isInfoShowing ? 'block' : 'hidden'
        } fixed top-0 left-0 z-[90] w-screen h-screen bg-black bg-opacity-95 flex justify-center items-center`}
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
            <p className="[&_a]:underline [&_a]:underline-offset-2 pt-4 text-xs">
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
    </>
  );
}
