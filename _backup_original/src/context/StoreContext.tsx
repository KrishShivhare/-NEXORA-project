import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, Store, Category, Order } from '../types';
import { INITIAL_PRODUCTS, INITIAL_STORES, INITIAL_CATEGORIES, INITIAL_ORDERS } from '../data/mockData';

interface StoreContextType {
  products: Product[];
  stores: Store[];
  categories: Category[];
  orders: Order[];
  addProduct: (productData: Omit<Product, 'id' | 'createdAt'>) => Product;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  getProductById: (id: string) => Product | undefined;
  addStore: (storeData: Omit<Store, 'id' | 'joinedDate' | 'rating' | 'reviewCount'>) => Store;
  updateStore: (id: string, updates: Partial<Store>) => void;
  getStoreById: (id: string) => Store | undefined;
  getStoreBySlug: (slug: string) => Store | undefined;
  addOrder: (order: Omit<Order, 'id' | 'date'>) => Order;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  resetDemoData: () => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('nexora_products');
      if (saved) return JSON.parse(saved);
    } catch {}
    return INITIAL_PRODUCTS;
  });

  const [stores, setStores] = useState<Store[]>(() => {
    try {
      const saved = localStorage.getItem('nexora_stores');
      if (saved) return JSON.parse(saved);
    } catch {}
    return INITIAL_STORES;
  });

  const [categories] = useState<Category[]>(INITIAL_CATEGORIES);

  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem('nexora_orders');
      if (saved) return JSON.parse(saved);
    } catch {}
    return INITIAL_ORDERS;
  });

  // LocalStorage synchronizations
  useEffect(() => {
    localStorage.setItem('nexora_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('nexora_stores', JSON.stringify(stores));
  }, [stores]);

  useEffect(() => {
    localStorage.setItem('nexora_orders', JSON.stringify(orders));
  }, [orders]);

  const addProduct = (productData: Omit<Product, 'id' | 'createdAt'>): Product => {
    const newProduct: Product = {
      ...productData,
      id: `prod-${Date.now()}`,
      createdAt: new Date().toISOString().split('T')[0],
      rating: 5.0,
      reviewCount: 0,
    };
    setProducts((prev) => [newProduct, ...prev]);
    return newProduct;
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updates } : item))
    );
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  const getProductById = (id: string) => {
    return products.find((p) => p.id === id);
  };

  const addStore = (storeData: Omit<Store, 'id' | 'joinedDate' | 'rating' | 'reviewCount'>): Store => {
    const newStore: Store = {
      ...storeData,
      id: `store-${Date.now()}`,
      joinedDate: 'Just now',
      rating: 5.0,
      reviewCount: 1,
      totalProducts: 0,
      totalSales: 0,
      verified: true,
    };
    setStores((prev) => [newStore, ...prev]);
    return newStore;
  };

  const updateStore = (id: string, updates: Partial<Store>) => {
    setStores((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updates } : item))
    );
  };

  const getStoreById = (id: string) => {
    return stores.find((s) => s.id === id);
  };

  const getStoreBySlug = (slug: string) => {
    return stores.find((s) => s.slug === slug);
  };

  const addOrder = (orderData: Omit<Order, 'id' | 'date'>): Order => {
    const newOrder: Order = {
      ...orderData,
      id: `NX-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Processing',
    };
    setOrders((prev) => [newOrder, ...prev]);
    return newOrder;
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders((prev) =>
      prev.map((ord) => (ord.id === orderId ? { ...ord, status } : ord))
    );
  };

  const resetDemoData = () => {
    setProducts(INITIAL_PRODUCTS);
    setStores(INITIAL_STORES);
    setOrders(INITIAL_ORDERS);
    localStorage.removeItem('nexora_products');
    localStorage.removeItem('nexora_stores');
    localStorage.removeItem('nexora_orders');
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        stores,
        categories,
        orders,
        addProduct,
        updateProduct,
        deleteProduct,
        getProductById,
        addStore,
        updateStore,
        getStoreById,
        getStoreBySlug,
        addOrder,
        updateOrderStatus,
        resetDemoData,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used within a StoreProvider');
  return context;
};
