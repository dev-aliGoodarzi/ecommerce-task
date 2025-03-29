interface I_ProductCategory {
  id: number;
  name: string;
  image: string;
  slug: string;
}

export interface I_Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: I_ProductCategory;
  images: string[];
}
