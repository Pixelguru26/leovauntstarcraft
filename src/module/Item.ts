
export interface WeaponData {
  get dmgTotal(): number;
  dmgBase: number;
  modMisc: number;
  penetration: number;
  get accTotal(): number;
  accWeapon: number;
  accSkill: number;
  accMisc: number;
  traits: string;
}

export interface MeleeWeaponData extends WeaponData {
  extraStrikes: number;
  reach: number;
}

export interface MeleeWeaponDataSource {
  type: 'weapon_melee';
  data: MeleeWeaponData;
}

export interface RangedWeaponData extends WeaponData {
  ammo: number;
  ammoMax: number;
  range: number;
}

export interface RangedWeaponDataSource {
  type: 'weapon_ranged';
  data: RangedWeaponData;
}

export type UniversalItemDataSource = MeleeWeaponDataSource | RangedWeaponDataSource;

declare global {
  interface SourceConfig {
    Item: UniversalItemDataSource;
  }
}