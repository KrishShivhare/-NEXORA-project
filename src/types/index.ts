export type ProductCondition = 'New' | 'Used';
export type ProductStatus = 'published' | 'draft';
export type UserRole = 'buyer' | 'seller' | 'admin';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  condition: ProductCondition;
  conditionDetail?: string; // e.g. "Mint Condition", "Open Box", "Brand New in Box"
  stock: number;
  status: ProductStatus;
  images: string[];
  rating: number;
  reviewCount: number;
  storeId: string;
  storeName: string;
  sellerVerified: boolean;
  features?: string[];
  createdAt: string;
}

export interface Store {
  id: string;
  name: string;
  slug: string;
  logo: string;
  banner: string;
  description: string;
  category: string;
  brandColor: string; // Hex color for custom storefront accent
  rating: number;
  reviewCount: number;
  totalProducts?: number;
  totalSales?: number;
  verified: boolean;
  joinedDate: string;
  location: string;
  email: string;
  phone?: string;
  website?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderItem {
  productId: string;
  productTitle: string;
  price: number;
  quantity: number;
  image: string;
  storeName: string;
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  date: string;
  shippingAddress: {
    fullName: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  trackingNumber?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  storeId?: string;
  avatar?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  avatar?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  itemCount: number;
  image: string;
}
