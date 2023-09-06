'use client';

import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import Separator from './Separator';

import InfoIcon from '@/assets/meta/InfoIcon';
import CloseIcon from '@/assets/meta/CloseIcon';
import GithubIcon from '@/assets/meta/GithubIcon';

import knightIcon from '@/assets/ui/knight-icon.png';

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
          isInfoShowing ? 'flex' : 'hidden'
        } fixed top-0 left-0 z-[90] w-screen h-screen bg-black bg-opacity-95 justify-center items-center text-sm`}
      >
        <div
          id="info-box"
          className="overflow-y-auto flex flex-col justify-between min-w-[50%] w-[90vw] md:w-auto h-[auto] max-h-[75vh] mx-auto p-4 pt-6 bg-zinc-950 border-2 border-zinc-100/70 rounded-md"
        >
          <span className="[&_a]:underline [&_a]:underline-offset-2">
            <span>
              <span className="flex items-center gap-2">
                <Image alt="" src={knightIcon} className="max-w-[40px]" />
                <h1 className="w-max">About</h1>
              </span>
              <Separator />
              <p className="max-w-prose">
                The Knight&apos;s Calculator is a damage analysis tool for the
                game{' '}
                <Link href="https://www.hollowknight.com/" target="_blank">
                  Hollow Knight.
                </Link>
              </p>
              <p></p>
            </span>
            <span>
              <h3 className="w-max mt-4">Assumptions</h3>
              <ul className="list-disc px-8 py-2 leading-loose">
                <li>
                  All values and calculations come from the{' '}
                  <Link
                    href="https://hollowknight.fandom.com/wiki/Hollow_Knight_Wiki"
                    target="_blank"
                  >
                    Hollow Knight Wiki
                  </Link>
                </li>
                <li>
                  All spells shows damage where the spell hits the target
                  completely
                </li>
                <li>
                  Fury of the Fallen: Effects are added assuming you have one
                  mask
                </li>
                <li>
                  Weaversong: Soul regen increase happens only upon damage dealt
                  by a Weaverling
                </li>
                <li>Grimmchild: Damage shown is from its final form</li>
              </ul>
            </span>
            <span>
              <h3 className="w-max mt-4">Disclaimers</h3>
              <ul className="list-disc px-8 py-2 leading-loose">
                <li>
                  This project is not affiliated with Hollow Knight or{' '}
                  <Link href="https://www.teamcherry.com.au/" target="_blank">
                    Team Cherry
                  </Link>
                </li>
                <li>Art assets used are owned by Team Cherry</li>
              </ul>
            </span>
          </span>
          <span className="flex flex-row items-end justify-between pt-4 text-xs">
            <span className="flex flex-wrap gap-1">
              <p className="[&_a]:underline [&_a]:underline-offset-2">
                Built by{' '}
                <Link href="https://www.isaiahchin.com/" target="_blank">
                  Isaiah.
                </Link>
              </p>
              <p>All rights reserved.</p>
            </span>
            <Link
              href="https://github.com/IsaiahChin/the-knights-calculator"
              target="_blank"
              className="w-min flex gap-2 items-center px-2 py-2 border-2 border-zinc-100/50 hover:border-zinc-50/100 rounded-lg opacity-60 hover:opacity-100 transition-opacity"
            >
              <GithubIcon />
              Source
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
