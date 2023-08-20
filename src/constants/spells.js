import SpellIcons from '../assets/ui/loadout/spell';

const spells = [
  {
    name: 'Vengeful Spirit',
    alias: 'fireball',
    damage: { value: 15, amount: 1 },
    icon: SpellIcons.fireball,
  },
  {
    name: 'Shade Soul',
    alias: 'fireballUpgrade',
    damage: { value: 30, amount: 1 },
    icon: SpellIcons.fireballUpgrade,
  },
  {
    name: 'Desolate Dive',
    alias: 'dive',
    damage: { value: 35, amount: 1 },
    icon: SpellIcons.dive,
  },
  {
    name: 'Descending Dark',
    alias: 'diveUpgrade',
    damage: { value: 60, amount: 1 },
    icon: SpellIcons.diveUpgrade,
  },
  {
    name: 'Howling Wraiths',
    alias: 'wraiths',
    damage: { value: 13, amount: 3 },
    icon: SpellIcons.wraiths,
  },
  {
    name: 'Abyss Shriek',
    alias: 'wraithsUpgrade',
    damage: { value: 20, amount: 4 },
    icon: SpellIcons.wraithsUpgrade,
  },
];

export default spells;
