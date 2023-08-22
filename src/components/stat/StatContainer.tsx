import { StaticImageData } from 'next/image';

import StatBlock from '../StatBlock';
import Separator from '../Separator';

import NAILART from '@/constants/nailart';

import SpellIcons from '@/assets/ui/loadout/spell';

interface Minions {
  name: string;
  amount: number;
  value: number;
  image: StaticImageData;
}

export default function StatContainer({
  loadout,
  equippedCharms,
}: {
  loadout: any;
  equippedCharms: Array<{
    name: string;
    cost: number;
    origin: string;
    image: StaticImageData;
    effect: any;
    isEquipped: boolean;
  }>;
}) {
  function calculateCharmEffects() {
    let totalNailDamage = loadout.nail.damage;

    let damageMod = 0.0;
    let damagePercentage = 0.0;
    let swingMod = 0.0;

    let spellCostMod = 0.0;
    let soulRegenMod = 0.0;

    let fireballPercentage = 0.0;
    let divePercentage = 0.0;
    let wraithsPercentage = 0.0;

    let minions: Minions[] = [];

    // Stops Unbreakable Strength and Fury of the Fallen from doubling damage multipliers
    let hasStrengthFuryBeenCalculated = false;

    equippedCharms.forEach((charm) => {
      const { name, effect } = charm;

      // Don't include Shaman Stone calculations yet
      if (effect && name !== 'Shaman Stone') {
        const { nail, soul, spell, minion } = effect;

        if (nail) {
          const { isPercentage, swingRate } = nail;

          if (isPercentage) {
            // Calculate specific order of damage multipliers
            if (
              isCharmEquipped('Unbreakable Strength') &&
              isCharmEquipped('Fury of the Fallen') &&
              hasStrengthFuryBeenCalculated == false
            ) {
              const unbreakableStrength = equippedCharms.find(
                (charm) => charm.name == 'Unbreakable Strength'
              );

              damagePercentage =
                1 + unbreakableStrength?.effect.nail.value / 100;

              totalNailDamage = Math.ceil(
                applyPercentageModIfPossible(totalNailDamage, damagePercentage)
              );

              const furyOfTheFallen = equippedCharms.find(
                (charm) => charm.name == 'Fury of the Fallen'
              );

              damagePercentage = 1 + furyOfTheFallen?.effect.nail.value / 100;

              totalNailDamage = Math.ceil(
                applyPercentageModIfPossible(totalNailDamage, damagePercentage)
              );

              hasStrengthFuryBeenCalculated = true;
            } else if (hasStrengthFuryBeenCalculated == false) {
              damagePercentage = 1 + charm?.effect.nail.value / 100;
              totalNailDamage = applyPercentageModIfPossible(
                totalNailDamage,
                damagePercentage
              );
            }
          } else {
            damageMod += charm.effect.nail.value;
          }

          if (swingRate !== undefined) {
            swingMod += swingRate;
          }
        }

        if (soul) {
          const { spellCost, regen } = soul;

          if (spellCost !== undefined) {
            spellCostMod += spellCost;
          }

          if (regen !== undefined) {
            soulRegenMod += regen;
          }
        }

        if (spell) {
          const { fireball, dive, diveUpgrade, wraiths } = spell;

          if (fireball && fireball.isPercentage) {
            fireballPercentage = 1 + fireball.value / 100;
          }

          if (dive) {
            if (dive.isPercentage) {
              divePercentage = 1 + dive.value / 100;
            }

            if (loadout.spell.dive.name === 'Descending Dark') {
              if (diveUpgrade.isPercentage) {
                divePercentage = 1 + diveUpgrade.value / 100;
              }
            }
          }

          if (wraiths && wraiths.isPercentage) {
            wraithsPercentage = 1 + wraiths.value / 100;
          }
        }

        if (minion) {
          const { amount, value, name, image } = minion;

          minions.push({
            name: name,
            amount: amount,
            value:
              isCharmEquipped('Fury of the Fallen') &&
              isCharmEquipped('Glowing Womb')
                ? value + 1
                : value,
            image: image,
          });
        }
      }
    });

    function applyPercentageModIfPossible(value: number, percentage: number) {
      return percentage > 0.0 ? value * percentage : value;
    }

    // Nail effects
    let totalSwingSpeed = loadout.nail.swingRate + swingMod;

    // Soul effects
    let totalSpellCost = loadout.soul.spellCost + spellCostMod;
    let totalSoulRegen = loadout.soul.regen + soulRegenMod;

    // Add Shaman Stone effects for spells
    if (isCharmEquipped('Shaman Stone')) {
      const shamanStone = equippedCharms.find(
        (charm) => charm.name == 'Shaman Stone'
      );

      fireballPercentage = 1 + shamanStone?.effect.spell.fireball.value / 100;

      divePercentage =
        loadout.spell.dive.name == 'Descending Dark'
          ? 1 + shamanStone?.effect.spell.diveUpgrade.value / 100
          : 1 + shamanStone?.effect.spell.dive.value / 100;

      wraithsPercentage =
        loadout.spell.wraiths.name == 'Abyss Shriek'
          ? 1 + shamanStone?.effect.spell.wraithsUpgrade.value / 100
          : 1 + shamanStone?.effect.spell.wraiths.value / 100;
    }

    // Spell effects
    let totalFireballDamage = applyPercentageModIfPossible(
      loadout.spell.fireball.damage,
      fireballPercentage
    );

    let totalDiveDamage = applyPercentageModIfPossible(
      loadout.spell.dive.damage,
      divePercentage
    );

    let totalWraithsDamage = applyPercentageModIfPossible(
      loadout.spell.wraiths.damage,
      wraithsPercentage
    );

    return {
      totalNailDamage: totalNailDamage,
      totalSwingSpeed: totalSwingSpeed,
      totalSpellCost: totalSpellCost,
      totalSoulRegen: totalSoulRegen,
      totalFireballDamage: totalFireballDamage,
      totalDiveDamage: totalDiveDamage,
      totalWraithsDamage: totalWraithsDamage,
      minions: minions,
    };
  }

  let charmCalculations = calculateCharmEffects();

  let stats = {
    nailDamage: charmCalculations.totalNailDamage,
    swingSpeed: charmCalculations.totalSwingSpeed,
    spellCost: charmCalculations.totalSpellCost,
    soulRegen: charmCalculations.totalSoulRegen,
    fireballDamage: charmCalculations.totalFireballDamage,
    diveDamage: charmCalculations.totalDiveDamage,
    wraithsDamage: charmCalculations.totalWraithsDamage,
    minions: charmCalculations.minions,
  };

  function isCharmEquipped(name: string) {
    return equippedCharms.some((charm) => charm.name == name);
  }

  function renderFireball() {
    let title = loadout.spell.fireball.name;
    let icon = loadout.spell.fireball.icon;
    let value = stats.fireballDamage;
    let subValue = 'dmg';

    if (isCharmEquipped('Flukenest')) {
      const flukenest = equippedCharms.find(
        (charm) => charm.name == 'Flukenest'
      );
      const flukeSpellEffect = flukenest?.effect.spell;

      title = 'Flukelings';
      icon = SpellIcons.flukeling;
      value =
        flukeSpellEffect.fireball.amount * flukeSpellEffect.fireball.value;
      subValue = `dmg (${flukeSpellEffect.fireball.amount} flukes * ${flukeSpellEffect.fireballUpgrade.value} dmg)`;

      if (loadout.spell.fireball.name == 'Shade Soul') {
        icon = SpellIcons.flukelingShade;
        value =
          flukeSpellEffect.fireballUpgrade.amount *
          flukeSpellEffect.fireballUpgrade.value;
        subValue = `dmg (${flukeSpellEffect.fireballUpgrade.amount} flukes * ${flukeSpellEffect.fireballUpgrade.value} dmg)`;
      }

      if (isCharmEquipped('Shaman Stone')) {
        value =
          flukeSpellEffect.fireball.amount *
          (flukeSpellEffect.fireball.value + 1);
        subValue = `dmg (${flukeSpellEffect.fireball.amount} flukes * ${
          flukeSpellEffect.fireballUpgrade.value + 1
        } dmg)`;

        if (loadout.spell.fireball.name == 'Shade Soul') {
          value =
            flukeSpellEffect.fireballUpgrade.amount *
            (flukeSpellEffect.fireballUpgrade.value + 1);
          subValue = `dmg (${
            flukeSpellEffect.fireballUpgrade.amount
          } flukes * ${flukeSpellEffect.fireballUpgrade.value + 1} dmg)`;
        }
      }

      if (isCharmEquipped(`Defender's Crest`)) {
        title = 'Volatile Fluke';
        value = 26;
        subValue = 'dmg';
        icon = SpellIcons.flukelingDung;

        if (isCharmEquipped('Shaman Stone')) {
          value = 32;
        }
      }
    }

    return (
      <StatBlock
        key={title}
        title={title}
        icon={icon}
        iconAlt={title}
        value={value.toFixed(0)}
        subValue={subValue}
      />
    );
  }

  return (
    <section
      id="stats"
      className="w-full md:w-3/12 h-5/6 md:h-auto md:relative"
    >
      <h1 id="statistics" className="w-full scroll-m-24">
        Statistics
      </h1>
      <Separator />
      <h2 className="pb-2">Nail</h2>
      <div className="flex flex-wrap gap-4">
        <StatBlock
          title="DPS"
          value={(stats.nailDamage / stats.swingSpeed).toFixed(2)}
          valueSize="large"
        />
        <StatBlock
          title={loadout.nail.name}
          value={stats.nailDamage.toFixed(0)}
          subValue="dmg"
        />
        <StatBlock
          title="Swing Speed"
          value={stats.swingSpeed.toFixed(2)}
          subValue="s"
        />
        <div className="w-full flex flex-col gap-y-4">
          {NAILART.map((nailart, index) => {
            return (
              <StatBlock
                key={index}
                title={
                  nailart.name[0].toUpperCase() +
                  nailart.name.slice(1, nailart.name.length) +
                  ' Slash'
                }
                icon={nailart.icon}
                iconAlt={nailart.name + ' slash'}
                value={
                  nailart.hits?.max != undefined
                    ? (
                        stats.nailDamage *
                        nailart.damageMod *
                        nailart.hits?.max
                      ).toFixed(2)
                    : (stats.nailDamage * nailart.damageMod).toFixed(2)
                }
                subValue={`dmg ${
                  nailart.name == 'cyclone'
                    ? ` (all ${nailart.hits?.max} hits)`
                    : ''
                }`}
              />
            );
          })}
        </div>
      </div>
      <Separator />
      <h2 className="pb-2">Soul / Spells</h2>
      <div className="flex flex-wrap gap-4">
        <span className="flex flex-wrap flex-col md:flex-row gap-4">
          <StatBlock
            title="Max"
            value={loadout.soul.max.toFixed(0)}
            subValue="soul"
            valueSize="large"
          />
          <StatBlock
            title="Spell cost"
            value={stats.spellCost.toFixed(0)}
            subValue="soul"
            valueSize="large"
          />
          <StatBlock
            title="Regen"
            value={stats.soulRegen.toFixed(0)}
            subValue="soul"
            valueSize="large"
          />
        </span>
        <div className="w-full flex flex-row flex-wrap justify-normal md:justify-between gap-4">
          <div className="flex flex-col gap-y-4">
            {renderFireball()}
            {Object.values(
              loadout.spell as {
                [key: string]: {
                  name: string;
                  damage: number;
                  icon: StaticImageData;
                };
              }
            ).map(
              ({ name, icon }, index) =>
                index !== 0 && (
                  <StatBlock
                    key={name}
                    title={name}
                    icon={icon}
                    iconAlt={name}
                    value={
                      index == 1
                        ? stats.diveDamage.toFixed(0)
                        : stats.wraithsDamage.toFixed(0)
                    }
                    subValue="dmg"
                  />
                )
            )}
          </div>
          <div className="flex flex-col gap-y-4">
            {stats.minions.map((minion) => (
              <StatBlock
                key={minion.name}
                value={minion.value * minion.amount}
                title={minion.name}
                icon={
                  isCharmEquipped('Glowing Womb') &&
                  isCharmEquipped(`Defender's Crest`) &&
                  minion.name == 'Hatchlings'
                    ? SpellIcons.dungling
                    : minion.image
                }
                iconAlt={minion.name}
                subValue="dmg"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
