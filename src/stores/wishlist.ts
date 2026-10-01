import { defineStore } from "pinia";
import type { Product } from "@/data/products";

const saved = localStorage.getItem("flower-wishlist");

export const useWishlistStore = defineStore("wishlist", {
  state: () => ({
    items: saved ? (JSON.parse(saved) as Product[]) : ([] as Product[]),
  }),
  getters: {
    count: (state) => state.items.length,
    isFavorite: (state) => (productId: number) =>
      state.items.some((item) => item.id === productId),
  },
  actions: {
    toggle(product: Product) {
      const index = this.items.findIndex((item) => item.id === product.id);
      if (index >= 0) this.items.splice(index, 1);
      else this.items.push(product);
      localStorage.setItem("flower-wishlist", JSON.stringify(this.items));
    },
  },
});
