import * as NailAssets from '@/assets/ui/loadout/nail';
import ImageButton from '@/components/ImageButton';

export default function Home() {
  const nails = [
    { name: 'old', image: NailAssets.oldNail },
    { name: 'sharpened', image: NailAssets.sharpenedNail },
    { name: 'channelled', image: NailAssets.channelledNail },
    { name: 'coiled', image: NailAssets.coiledNail },
    { name: 'pure', image: NailAssets.pureNail },
  ];

  return (
    <div id="upgrade-container" className="w-3/5 h-full p-4">
      <h2 className="text-center pb-8">Nail Upgrades</h2>
      <div id="nail-container" className="flex gap-16 justify-evenly">
        {nails.map((nail) => {
          return (
            <span className="flex flex-col items-center gap-4" key={nail.name}>
              <h3>
                {nail.name[0].toUpperCase() +
                  nail.name.slice(1, nail.name.length)}
              </h3>
              <ImageButton image={nail.image} altText={nail.name} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
