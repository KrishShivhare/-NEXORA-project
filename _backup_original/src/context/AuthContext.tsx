import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  role: UserRole;
  isAuthenticated: boolean;
  isSeller: boolean;
  isAdmin: boolean;
  login: (role: UserRole, email?: string, name?: string, storeId?: string) => void;
  logout: () => void;
  switchRole: (role: UserRole) => void;
  updateUser: (updated: Partial<User>) => void;
}

const DEFAULT_USERS: Record<UserRole, User> = {
  buyer: {
    id: 'user-buyer-1',
    name: 'Marcus Vance',
    email: 'marcus.vance@design.co',
    role: 'buyer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  seller: {
    id: 'user-seller-1',
    name: 'Elena Rostova',
    email: 'elena@aethersound.io',
    role: 'seller',
    storeId: 'store-1',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
  },
  admin: {
    id: 'user-admin-1',
    name: 'David Mercer',
    email: 'ops@nexora.io',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem('nexora_user');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    // Default to the seller demo user so reviewing seller dashboard & store pages works out-of-the-box
    return DEFAULT_USERS.seller;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('nexora_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('nexora_user');
    }
  }, [user]);

  const login = (role: UserRole, email?: string, name?: string, storeId?: string) => {
    const template = DEFAULT_USERS[role];
    const newUser: User = {
      ...template,
      id: `user-${Date.now()}`,
      name: name || template.name,
      email: email || template.email,
      role,
      storeId: storeId || (role === 'seller' ? template.storeId : undefined),
    };
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  const switchRole = (role: UserRole) => {
    setUser(DEFAULT_USERS[role]);
  };

  const updateUser = (updated: Partial<User>) => {
    if (!user) return;
    setUser({ ...user, ...updated });
  };

  const role = user?.role || 'buyer';
  const isAuthenticated = !!user;
  const isSeller = role === 'seller';
  const isAdmin = role === 'admin';

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        isAuthenticated,
        isSeller,
        isAdmin,
        login,
        logout,
        switchRole,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
