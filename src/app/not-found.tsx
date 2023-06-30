import Link from 'next/link';
import mapPrompt from '@/assets/ui/map-prompt.png';
import Image from 'next/image';

export default function NotFound() {
  return (
    <span className="flex flex-col text-center items-center">
      <Image
        src={mapPrompt}
        alt="Map"
        className="max-w-[200px] margin-[0_auto]"
      />
      <h1>404</h1>
      <p>{"There's no geo here!"}</p>
      <p>
        Go visit{' '}
        <Link href="/" className="underline underline-offset-4">
          {'The Knight'}
        </Link>{' '}
        instead.
      </p>
    </span>
  );
}
