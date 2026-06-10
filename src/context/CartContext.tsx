"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartContextType {
  selectedCartServices: string[];
  toggleCartService: (serviceTitle: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [selectedCartServices, setSelectedCartServices] = useState<string[]>([]);

  const toggleCartService = (serviceTitle: string) => {
    setSelectedCartServices((prev) => {
      if (prev.includes(serviceTitle)) {
        return prev.filter((item) => item !== serviceTitle);
      } else {
        return [...prev, serviceTitle];
      }
    });
  };

  const clearCart = () => {
    setSelectedCartServices([]);
  };

  return (
    <CartContext.Provider value={{ selectedCartServices, toggleCartService, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
