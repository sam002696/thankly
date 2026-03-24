/**
 * Brand color tokens — mirrors the @theme values in global.css.
 *
 * For everything else, use the semantic Tailwind classes:
 *   bg-brand, text-ink, bg-accent, bg-cream, text-success, etc.
 */
export const colors = {
  brand:       '#ef4444',  // bg-brand
  brandDark:   '#dc2626',  // bg-brand-dark
  accent:      '#F5A623',  // bg-accent
  accentDark:  '#d97706',  // bg-accent-dark
  cream:       '#FFF8E7',  // bg-cream
  ink:         '#3E2723',  // bg-ink / text-ink
  success:     '#16a34a',  // bg-success
  sage:        '#689F38',  // illustration only
  skin:        '#FFD1B3',  // illustration only
  bodyGreen:   '#8CB388',  // illustration only
};

/** Card background options used in the editor. */
export const cardBackgrounds = [
  { name: 'cream',  color: colors.cream },
  { name: 'accent', color: colors.accent },
  { name: 'brand',  color: colors.brand },
  { name: 'sage',   color: colors.sage },
];
