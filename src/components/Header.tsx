import Info from './Info';

export default function Header() {
  const navLinks = [
    { id: 0, name: 'Enemies' },
    { id: 1, name: 'Statistics' },
    { id: 2, name: 'Loadout' },
  ];

  return (
    <header className="w-full pl-4 pr-0 py-2 flex items-center justify-between z-50 sticky top-0 bg-zinc-950">
      <span>
        <h3 className="w-max pt-4 pb-2">
          <a href="/">The Knight&apos;s Calculator</a>
        </h3>
        <nav aria-label="Mobile navigation" className="flex md:hidden gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${
                link.name[0].toLowerCase() +
                link.name.slice(1, link.name.length)
              }`}
              className="flex gap-2 items-center group"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </span>
      <Info />
    </header>
  );
}
