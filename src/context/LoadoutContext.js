'use client';

import { createContext } from 'react';
import knight from '../data/knight';

export const LoadoutContext = createContext({
  health: knight.health.min,
  fireRate: knight.nail.rate,
  damage: knight.nail.damage[0],
  soulMax: knight.soul.max,
  soulRegen: knight.soul.regen,
});
