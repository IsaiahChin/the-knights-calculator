import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-fit p-4 mx-auto flex justify-center text-xs">
      <p className="[&_a]:underline [&_a]:underline-offset-2">
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
    </footer>
  );
}
