import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "home", component: () => import("@/views/HomeView.vue") },
  {
    path: "/products",
    name: "products",
    component: () => import("@/views/Products-View.vue"),
  },
  {
    path: "/products/:id",
    name: "products-details",
    component: () => import("@/views/Product-Details-View.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/Cart-View.vue"),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("@/views/Check-View.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/order-confirmation",
    name: "order-confirmation",
    component: () => import("@/views/Order-Confirm-View.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/ContactView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
    meta: { guestOnly: true },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/RegisterView.vue"),
    meta: { guestOnly: true },
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/ProfileView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/orders",
    name: "orders",
    component: () => import("@/views/OrdersView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: () => import("@/views/WishlistView.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/DashboardView.vue"),
    meta: { requiresAuth: true, requiresAdmin: true },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});

router.beforeEach((to) => {
  const user = localStorage.getItem("flower-user");
  let parsedUser: { role: string } | null = null;
  try {
    parsedUser = user ? (JSON.parse(user) as { role: string }) : null;
  } catch {
    localStorage.removeItem("flower-user");
  }

  if (to.meta.requiresAuth && !parsedUser) {
    return { name: "login", query: { redirect: to.fullPath } };
  }

  if (to.meta.requiresAdmin && parsedUser?.role !== "admin") {
    return { name: "home" };
  }

  if (to.meta.guestOnly && parsedUser) {
    return { name: "home" };
  }

  return true;
});

export default router;
