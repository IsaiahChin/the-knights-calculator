export default function Separator({ padding = '4' }) {
  return (
    <hr
      className={`w-full h-[2px] mx-auto my-${padding} bg-zinc-100 border-0 rounded-lg`}
    />
  );
}
