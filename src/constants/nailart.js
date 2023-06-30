import NailartIcons from '@/assets/ui/loadout/nailart';

const NAILART = [
  {
    name: 'great',
    damageMod: 2.5,
    icon: NailartIcons.greatSlash,
  },
  {
    name: 'dash',
    damageMod: 4.375,
    icon: NailartIcons.dashSlash,
  },
  {
    name: 'cyclone',
    damageMod: 1.25,
    hits: {
      min: 3,
      max: 6,
    },
    icon: NailartIcons.cycloneSlash,
  },
];

export default NAILART;
