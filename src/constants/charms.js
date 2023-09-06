import CharmIcons from '../assets/ui/loadout/charm';
import SpellIcons from '@/assets/ui/loadout/spell';
import CONTENTPACKS from '../constants/content';

const charms = [
  {
    name: 'Wayward Compass',
    cost: 1,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.waywardCompass,
  },
  {
    name: 'Gathering Swarm',
    cost: 1,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.gatheringSwarm,
  },
  {
    name: 'Stalwart Shell',
    cost: 2,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.stalwartShell,
  },
  {
    name: 'Soul Catcher',
    cost: 2,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.soulCatcher,
    effect: {
      soul: { regen: 3 },
    },
  },
  {
    name: 'Shaman Stone',
    cost: 3,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.shamanStone,
    effect: {
      spell: {
        fireball: { isPercentage: 'true', value: 33 },
        dive: { isPercentage: 'true', value: 51 },
        diveUpgrade: { isPercentage: 'true', value: 47 },
        wraiths: { isPercentage: 'true', value: 53 },
        wraithsUpgrade: { isPercentage: 'true', value: 50 },
      },
    },
  },
  {
    name: 'Soul Eater',
    cost: 4,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.soulEater,
    effect: {
      soul: {
        regen: 8,
      },
    },
  },
  {
    name: 'Dashmaster',
    cost: 2,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.dashmaster,
  },
  {
    name: 'Sprintmaster',
    cost: 1,
    origin: CONTENTPACKS.THE_GRIMM_TROUPE,
    image: CharmIcons.sprintmaster,
  },
  {
    name: 'Grubsong',
    cost: 2,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.grubsong,
  },
  {
    name: `Grubberfly's Elegy`,
    cost: 3,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.grubberflysElegy,
  },
  // {
  //   name: 'Fragile Heart',
  //   cost: 2,
  //   origin: CONTENT.MAIN,
  //   image: SpellIcons.fragileHeart,
  // },
  {
    name: 'Unbreakable Heart',
    cost: 2,
    origin: CONTENTPACKS.THE_GRIMM_TROUPE,
    image: CharmIcons.unbreakableHeart,
  },
  // {
  //   name: 'Fragile Greed',
  //   cost: 2,
  //   origin: CONTENT.MAIN,
  //   image: SpellIcons.fragileGreed,
  // },
  {
    name: 'Unbreakable Greed',
    cost: 2,
    origin: CONTENTPACKS.THE_GRIMM_TROUPE,
    image: CharmIcons.unbreakableGreed,
  },
  // {
  //   name: 'Fragile Strength',
  //   cost: 3,
  //   origin: CONTENT.MAIN,
  //   image: SpellIcons.fragileStrength,
  // },
  {
    name: 'Unbreakable Strength',
    cost: 3,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.unbreakableStrength,
    effect: {
      nail: { isPercentage: 'true', value: 50 },
    },
  },
  {
    name: 'Spell Twister',
    cost: 2,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.spellTwister,
    effect: {
      soul: {
        spellCost: -9,
      },
    },
  },
  {
    name: 'Steady Body',
    cost: 1,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.steadyBody,
  },
  {
    name: 'Heavy Blow',
    cost: 2,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.heavyBlow,
  },
  {
    name: 'Quick Slash',
    cost: 3,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.quickSlash,
    effect: {
      nail: {
        swingRate: -0.16,
      },
    },
  },
  {
    name: 'Longnail',
    cost: 2,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.longNail,
  },
  {
    name: 'Mark of Pride',
    cost: 3,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.markOfPride,
  },
  {
    name: 'Fury of the Fallen',
    cost: 2,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.furyOfTheFallen,
    effect: {
      nail: { isPercentage: 'true', value: 75 },
    },
  },
  {
    name: 'Thorns of Agony',
    cost: 1,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.thornsOfAgony,
  },
  {
    name: 'Baldur Shell',
    cost: 2,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.baldurShell,
  },
  {
    name: 'Flukenest',
    cost: 3,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.flukenest,
    effect: {
      spell: {
        fireball: { amount: 9, value: 4 },
        fireballUpgrade: { amount: 16, value: 4 },
      },
    },
  },
  {
    name: `Defender's Crest`,
    cost: 1,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.defendersCrest,
  },
  {
    name: 'Glowing Womb',
    cost: 2,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.glowingWomb,
    effect: {
      minion: {
        amount: 4,
        value: 9,
        name: 'Hatchlings',
        image: SpellIcons.hatchling,
      },
    },
  },
  {
    name: 'Quick Focus',
    cost: 3,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.quickFocus,
  },
  {
    name: 'Deep Focus',
    cost: 4,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.deepFocus,
  },
  {
    name: 'Lifeblood Heart',
    cost: 2,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.lifebloodHeart,
  },
  {
    name: 'Lifeblood Core',
    cost: 3,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.lifebloodCore,
  },
  {
    name: `Joni's Blessing`,
    cost: 4,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.jonisBlessing,
  },
  {
    name: 'Hiveblood',
    cost: 4,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.hiveblood,
  },
  {
    name: 'Spore Shroom',
    cost: 1,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.sporeShroom,
  },
  {
    name: 'Sharp Shadow',
    cost: 2,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.sharpShadow,
  },
  {
    name: 'Shape of Unn',
    cost: 2,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.shapeOfUnn,
  },
  {
    name: `Nailmaster's Glory`,
    cost: 1,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.nailmastersGlory,
  },
  {
    name: 'Weaversong',
    cost: 2,
    origin: CONTENTPACKS.THE_GRIMM_TROUPE,
    image: CharmIcons.weaversong,
    effect: {
      soul: { regen: 3 },
      minion: {
        amount: 3,
        value: 3,
        name: 'Weaverlings',
        image: SpellIcons.weaverling,
      },
    },
  },
  {
    name: 'Dream Wielder',
    cost: 1,
    origin: CONTENTPACKS.MAIN,
    image: CharmIcons.dreamWielder,
  },
  {
    name: 'Dreamshield',
    cost: 3,
    origin: CONTENTPACKS.THE_GRIMM_TROUPE,
    image: CharmIcons.dreamshield,
  },
  {
    name: 'Carefree Melody',
    cost: 3,
    origin: CONTENTPACKS.THE_GRIMM_TROUPE,
    image: CharmIcons.carefreeMelody,
  },
  {
    name: 'Grimmchild',
    cost: 2,
    origin: CONTENTPACKS.THE_GRIMM_TROUPE,
    image: CharmIcons.grimmchild,
    effect: {
      minion: {
        amount: 1,
        value: 11,
        name: 'Grimmchild',
        image: SpellIcons.grimmChild,
      },
    },
  },
  // {
  //   name: 'Kingsoul',
  //   cost: 5,
  //   origin: CONTENT.MAIN,
  //   image: SpellIcons.kingsoul,
  // },
  // {
  //   name: 'Void Heart',
  //   cost: 0,
  //   origin: CONTENT.MAIN,
  //   image: SpellIcons.voidHeart,
  // },
];

export default charms;
