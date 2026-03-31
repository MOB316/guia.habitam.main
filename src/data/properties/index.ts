import { canMiquel } from "./can-miquel";
import { testVivienda } from "./test-vivienda";

export const properties = [canMiquel, testVivienda];

export const DEFAULT_PROPERTY_SLUG = canMiquel.slug;

export const propertiesById = Object.fromEntries(
  properties.map((property) => [property.id, property]),
);

export const propertiesBySlug = Object.fromEntries(
  properties.map((property) => [property.slug, property]),
);

export const getPropertyBySlug = (slug?: string) =>
  slug ? propertiesBySlug[slug] : undefined;
