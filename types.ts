export interface LinkItem {
  title: string;
  url: string;
  description: string;
  tags?: string[];
  isRecommended?: boolean;
}

export interface SubCategory {
  id: string;
  title: string;
  links: LinkItem[];
}

export interface Category {
  id: string;
  title: string;
  iconName: string;
  description: string;
  subCategories: SubCategory[];
}

export type SearchResult = {
  item: LinkItem;
  categoryTitle: string;
  subCategoryTitle: string;
  categoryId: string;
  score?: number;
}