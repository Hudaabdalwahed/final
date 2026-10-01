import { defineStore } from "pinia";

export interface User {
  id: number;
  name: string;
  email: string;
  role: "user" | "admin";
}

interface AuthState {
  user: User | null;
}

const savedUser = localStorage.getItem("flower-user");

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    user: savedUser ? JSON.parse(savedUser) : null,
  }),
  getters: {
    isAuthenticated: (state) => Boolean(state.user),
    isAdmin: (state) => state.user?.role === "admin",
  },
  actions: {
    register(name: string, email: string, password: string) {
      if (localStorage.getItem(`flower-account-${email}`)) {
        throw new Error("An account with this email already exists.");
      }

      const user: User = {
        id: Date.now(),
        name,
        email,
        role: "user",
      };

      localStorage.setItem(
        `flower-account-${email}`,
        JSON.stringify({ user, password })
      );
      this.setUser(user);
    },

    login(email: string, password: string) {
      if (email === "admin@flower.com" && password === "admin123") {
        this.setUser({
          id: 1,
          name: "Flower Admin",
          email,
          role: "admin",
        });
        return;
      }

      const account = localStorage.getItem(`flower-account-${email}`);
      if (!account) {
        throw new Error("No account found with this email.");
      }

      const saved = JSON.parse(account) as { user: User; password: string };
      if (saved.password !== password) {
        throw new Error("Incorrect password.");
      }

      this.setUser(saved.user);
    },

    setUser(user: User) {
      this.user = user;
      localStorage.setItem("flower-user", JSON.stringify(user));
    },

    logout() {
      this.user = null;
      localStorage.removeItem("flower-user");
    },
  },
});
