import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex w-full p-4 justify-center text-sm">
      <p>
        Built by Isaiah.{' '}
        <Link
          href="https://www.hollowknight.com/"
          className="underline underline-offset-4"
          target="_blank"
        >
          Hollow Knight
        </Link>{' '}
        by{' '}
        <Link
          href="https://www.teamcherry.com.au/"
          className="underline underline-offset-4"
          target="_blank"
        >
          Team Cherry
        </Link>
        .
      </p>
    </footer>
  );
}
