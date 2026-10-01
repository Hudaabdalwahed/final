<template>
  <nav class="navbar navbar-expand-lg flower-navbar">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <span class="brand-mark"><i class="bi bi-flower1"></i></span>
        <span class="brand-copy"
          ><span class="brand-name">FLOWER</span
          ><span class="brand-subtitle">Flowers Shop</span></span
        >
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbarContent" class="collapse navbar-collapse">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
          <li v-if="auth.isAdmin" class="nav-item">
            <router-link class="nav-link" to="/dashboard"
              >Dashboard</router-link
            >
          </li>
        </ul>

        <div class="navbar-actions">
          <div v-if="showSearch" class="nav-search">
            <i class="bi bi-search"></i>
            <input
              ref="searchInput"
              v-model="searchText"
              type="search"
              placeholder="Search flowers..."
              @keyup.enter="goToSearch"
            />
          </div>
          <button
            class="icon-btn"
            type="button"
            aria-label="Search"
            @click="toggleSearch"
          >
            <i :class="showSearch ? 'bi bi-x-lg' : 'bi bi-search'"></i>
          </button>
          <router-link to="/wishlist" class="icon-btn" aria-label="Wishlist"
            ><i class="bi bi-heart"></i
            ><span v-if="wishlist.count" class="tiny-badge">{{
              wishlist.count
            }}</span></router-link
          >
          <router-link
            to="/cart"
            class="icon-btn cart-btn"
            aria-label="Shopping cart"
            ><i class="bi bi-bag-heart"></i
            ><span v-if="cartStore.cartCount" class="tiny-badge">{{
              cartStore.cartCount
            }}</span></router-link
          >
          <router-link
            v-if="!auth.isAuthenticated"
            to="/login"
            class="account-btn"
            ><i class="bi bi-person"></i><span>Sign in</span></router-link
          >
          <router-link v-else to="/profile" class="account-btn"
            ><span class="avatar-mini">{{ initials }}</span
            ><span>Hi, {{ firstName }}</span></router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/cart";
import { useWishlistStore } from "@/stores/wishlist";
import { useAuthStore } from "@/stores/auth";

const cartStore = useCartStore();
const wishlist = useWishlistStore();
const auth = useAuthStore();
const router = useRouter();
const showSearch = ref(false);
const searchText = ref("");
const searchInput = ref<HTMLInputElement | null>(null);
const firstName = computed(() => auth.user?.name.split(" ")[0] || "");
const initials = computed(
  () =>
    auth.user?.name
      .split(" ")
      .map((v) => v[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() || "F"
);

async function toggleSearch() {
  showSearch.value = !showSearch.value;
  if (showSearch.value) {
    await nextTick();
    searchInput.value?.focus();
  } else searchText.value = "";
}

function goToSearch() {
  const query = searchText.value.trim();
  router.push(
    query ? { path: "/products", query: { search: query } } : "/products"
  );
}
</script>

<style scoped>
.flower-navbar {
  position: relative;
  z-index: 20;
  background: rgba(255, 250, 248, 0.98);
  padding: 14px 0;
  border-bottom: 1px solid #ead9d5;
  box-shadow: 0 8px 25px rgba(117, 75, 85, 0.07);
}
.navbar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}
.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #7d4e5a, #bc7f8d);
  color: white;
  font-size: 19px;
  box-shadow: 0 7px 16px rgba(143, 89, 101, 0.22);
}
.brand-name {
  display: block;
  color: #65434b;
  font-size: 23px;
  font-weight: 700;
  letter-spacing: 4px;
  line-height: 1;
}
.brand-subtitle {
  display: block;
  margin-top: 5px;
  color: #a47b82;
  font-size: 8px;
  letter-spacing: 3px;
}
.nav-link {
  position: relative;
  color: #493838 !important;
  margin: 0 4px;
  padding: 10px 13px !important;
  border-radius: 30px;
  font-size: 13px;
  transition: 0.25s;
}
.nav-link:hover,
.nav-link.router-link-active {
  color: #8f5965 !important;
  background: #f8eeeb;
}
.navbar-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
.nav-search {
  width: 180px;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 0 12px;
  border: 1px solid #e2cfd0;
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 6px 18px rgba(117, 75, 85, 0.08);
}
.nav-search i {
  color: #9a5d6a;
}
.nav-search input {
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: #493838;
  font-size: 12px;
}
.icon-btn {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  border: 1px solid #e4d1d2;
  background: #fff;
  color: #754b55;
  text-decoration: none;
  font-size: 16px;
  transition: 0.25s;
}
.icon-btn:hover {
  background: #8f5965;
  border-color: #8f5965;
  color: white;
  transform: translateY(-2px);
}
.cart-btn {
  background: #f8eeeb;
}
.tiny-badge {
  position: absolute;
  right: -3px;
  top: -5px;
  min-width: 17px;
  height: 17px;
  padding: 0 4px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: #8f5965;
  color: white;
  font-size: 9px;
  border: 2px solid #fff;
}
.account-btn {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 7px 12px;
  border-radius: 22px;
  background: #65434b;
  color: white;
  text-decoration: none;
  font-size: 12px;
  margin-left: 4px;
  transition: 0.25s;
}
.account-btn:hover {
  background: #8f5965;
  color: white;
}
.avatar-mini {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #f2d5d5;
  color: #704953;
  font-size: 9px;
  font-weight: 700;
}
@media (max-width: 991px) {
  .navbar-actions {
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 10px;
  }
  .navbar-nav {
    text-align: center;
    margin-top: 15px;
  }
  .account-btn {
    margin-left: 0;
  }
  .nav-search {
    width: 170px;
  }
}
</style>
