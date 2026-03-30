import { canMiquel } from './can-miquel';

export const properties = [canMiquel];
export const propertiesById = Object.fromEntries(properties.map((p) => [p.id, p]));
