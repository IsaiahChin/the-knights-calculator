import NailArtIcons from '@/assets/ui/loadout/nailart';

const NAILART = [
  {
    name: 'great',
    damageMod: 2.5,
    icon: NailArtIcons.greatSlash,
  },
  {
    name: 'dash',
    damageMod: 4.375,
    icon: NailArtIcons.dashSlash,
  },
  {
    name: 'cyclone',
    damageMod: 1.25,
    hits: {
      min: 3,
      max: 6,
    },
    icon: NailArtIcons.cycloneSlash,
  },
];

export default NAILART;
