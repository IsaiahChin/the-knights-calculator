export default function Separator({
  className = '',
  padding = '4',
}: {
  className?: string;
  padding?: string;
}) {
  return (
    <hr
      className={`${className} w-full h-[2px] mx-auto my-${padding} bg-zinc-100 border-0`}
    />
  );
}
