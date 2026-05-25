import { EVIDENCE_CATEGORY } from '../config/siteConfig.js';

export function filterEvidenceByCategory(items, selectedCategory) {
  if (selectedCategory === EVIDENCE_CATEGORY.ALL) return items;

  return items.filter((item) => item.category === selectedCategory);
}
