import { defineStore } from "pinia";
import type { CartItem } from "@/stores/cart";

export interface Order {
  id: string;
  date: string;
  status: "Pending" | "Processing" | "Delivered";
  total: number;
  items: CartItem[];
  customerName: string;
}

const saved = localStorage.getItem("flower-orders");

export const useOrdersStore = defineStore("orders", {
  state: () => ({
    orders: saved ? (JSON.parse(saved) as Order[]) : ([] as Order[]),
  }),
  getters: {
    orderCount: (state) => state.orders.length,
    revenue: (state) =>
      state.orders.reduce((sum, order) => sum + order.total, 0),
  },
  actions: {
    createOrder(items: CartItem[], total: number, customerName: string) {
      const order: Order = {
        id: `FL-${Date.now().toString().slice(-6)}`,
        date: new Date().toLocaleDateString("en-GB"),
        status: "Pending",
        total,
        items: JSON.parse(JSON.stringify(items)),
        customerName,
      };
      this.orders.unshift(order);
      localStorage.setItem("flower-orders", JSON.stringify(this.orders));
      return order;
    },
  },
});
