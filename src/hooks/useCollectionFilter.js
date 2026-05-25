import { useMemo, useState } from 'react';

const ALL_CATEGORY = 'All';

export function useCollectionFilter(items, categoryKey = 'category') {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);

  const categories = useMemo(() => {
    const uniqueCategories = items.map(item => item[categoryKey]).filter(Boolean);
    return [ALL_CATEGORY, ...new Set(uniqueCategories)];
  }, [items, categoryKey]);

  const filteredItems = useMemo(() => {
    if (activeCategory === ALL_CATEGORY) {
      return items;
    }

    return items.filter(item => item[categoryKey] === activeCategory);
  }, [activeCategory, items, categoryKey]);

  return { activeCategory, categories, filteredItems, setActiveCategory };
}
