export interface FavoriteProduct {
  productIds: number;
}

export interface Product {
  id: number;
  price: number;
  weight: number;
  name: string;
  category: string;
  imageUrl: string;
  metadata: Metadata;
}

export interface Metadata {
  unit: string;
  increment: number,
  weight: number;
  calorie: number;
  proteins: number;
  fats: number;
  carbs: number;
}