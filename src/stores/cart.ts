import { defineStore } from "pinia";
import type { Product } from "@/data/products";

export interface CartItem extends Product {
  quantity: number;
}

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as CartItem[],
  }),

  getters: {
    cartCount: (state) =>
      state.items.reduce((total, item) => total + item.quantity, 0),

    cartTotal: (state) =>
      state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
  },

  actions: {
    addToCart(product: Product, quantity = 1) {
      const existingItem = this.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push({
          ...product,
          quantity,
        });
      }
    },

    increaseQuantity(productId: number) {
      const item = this.items.find((item) => item.id === productId);

      if (item) {
        item.quantity++;
      }
    },

    decreaseQuantity(productId: number) {
      const item = this.items.find((item) => item.id === productId);

      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },

    removeFromCart(productId: number) {
      this.items = this.items.filter((item) => item.id !== productId);
    },
  },
});
