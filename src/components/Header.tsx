import Info from './Info';

export default function Header() {
  return (
    <header className="w-full py-2 flex items-center justify-between z-50 sticky top-0 bg-zinc-950">
      <h3 className="w-max py-4">The Knight's Calculator</h3>
      <Info />
    </header>
  );
}
