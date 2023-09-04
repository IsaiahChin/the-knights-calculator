export default function Separator({ className = '' }: { className?: string }) {
  return (
    <hr
      className={`${className} w-full h-[2px] mx-auto my-4 bg-zinc-100 bg-opacity-40 border-0`}
    />
  );
}
