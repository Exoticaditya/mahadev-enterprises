"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface CartItem {
  id: string; // slug of product or accessory
  type: "product" | "accessory";
  title: string;
  model?: string; // e.g. M-01
  image?: string;
  quantity: number;
  woodFinish?: string;
  upholsteryColor?: string;
}

interface CartContextType {
  cart: CartItem[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  addToCart: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeFromCart: (id: string, woodFinish?: string, upholsteryColor?: string) => void;
  updateQuantity: (id: string, quantity: number, woodFinish?: string, upholsteryColor?: string) => void;
  clearCart: () => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("mahadev_cart");
      if (stored) {
        setCart(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load cart", e);
    }
    setIsInitialized(true);
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    if (!isInitialized) return;
    try {
      localStorage.setItem("mahadev_cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart", e);
    }
  }, [cart, isInitialized]);

  const addToCart = (newItem: Omit<CartItem, "quantity"> & { quantity?: number }) => {
    setCart((prevCart) => {
      // Find if item already exists with the SAME configurations (id, woodFinish, upholsteryColor)
      const existingIndex = prevCart.findIndex(
        (item) =>
          item.id === newItem.id &&
          item.woodFinish === newItem.woodFinish &&
          item.upholsteryColor === newItem.upholsteryColor
      );

      const qtyToAdd = newItem.quantity ?? 1;

      if (existingIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex] = {
          ...updatedCart[existingIndex],
          quantity: updatedCart[existingIndex].quantity + qtyToAdd,
        };
        return updatedCart;
      }

      return [...prevCart, { ...newItem, quantity: qtyToAdd } as CartItem];
    });
  };

  const removeFromCart = (id: string, woodFinish?: string, upholsteryColor?: string) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          !(
            item.id === id &&
            item.woodFinish === woodFinish &&
            item.upholsteryColor === upholsteryColor
          )
      )
    );
  };

  const updateQuantity = (id: string, quantity: number, woodFinish?: string, upholsteryColor?: string) => {
    if (quantity <= 0) {
      removeFromCart(id, woodFinish, upholsteryColor);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id &&
        item.woodFinish === woodFinish &&
        item.upholsteryColor === upholsteryColor
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        setIsOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
