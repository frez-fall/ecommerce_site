export interface ProductCategories {
  value: string;
  id: string;
  name: string;
}

export type ProductCategoriesContainer = {
  title: string | null;
  id: string;
  list: ProductCategories[];
};

export interface ProductInfo {
  id: number;
  name: string;
  size: number;
  price: number;
  skinType: string;
  productType: string;
  desc: string;
  ingredients: string[];
  benefits: string[];
  sustainabilityId: number;
  imageUrl: string;
}

export interface Sustainability {
  id: number;
  info: string;
}

export interface Images {
  [key: string]: string;
}
