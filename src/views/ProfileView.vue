<template>
  <main class="profile-page">
    <div class="container py-5">
      <div class="profile-hero">
        <div class="avatar">{{ initials }}</div>
        <div>
          <p class="eyebrow">MY FLOWER ACCOUNT</p>
          <h1>Hello, {{ auth.user?.name }}</h1>
          <p>{{ auth.user?.email }}</p>
        </div>
        <button class="logout" @click="logout">Sign out</button>
      </div>
      <div class="row g-4 mt-1">
        <div class="col-lg-8">
          <div class="panel">
            <p class="eyebrow">YOUR SPACE</p>
            <h2>Everything in one place.</h2>
            <div class="quick-grid">
              <router-link to="/orders"
                ><i class="bi bi-box-seam"></i><span>My Orders</span
                ><small>Track your bouquets</small></router-link
              ><router-link to="/wishlist"
                ><i class="bi bi-heart"></i><span>Wishlist</span
                ><small>{{ wishlist.count }} saved flowers</small></router-link
              ><router-link to="/products"
                ><i class="bi bi-flower1"></i><span>Shop Flowers</span
                ><small>Find something beautiful</small></router-link
              >
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="side-panel">
            <span class="mini-icon"><i class="bi bi-stars"></i></span>
            <h3>Flower member</h3>
            <p>
              Save favorites, follow orders and make every gift feel personal.
            </p>
            <router-link to="/products"
              >Explore collection <i class="bi bi-arrow-right"></i
            ></router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useWishlistStore } from "@/stores/wishlist";
const auth = useAuthStore();
const wishlist = useWishlistStore();
const router = useRouter();
const initials = computed(
  () =>
    auth.user?.name
      .split(" ")
      .map((v) => v[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() || "F"
);
function logout() {
  auth.logout();
  router.push("/");
}
</script>
<style scoped>
.profile-page {
  min-height: 80vh;
  background: radial-gradient(circle at 10% 10%, #f4e3df, transparent 32%),
    linear-gradient(135deg, #fffaf8, #f3eee7);
}
.profile-hero {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 35px;
  border-radius: 28px;
  background: linear-gradient(120deg, #65434b, #a96776);
  color: white;
  box-shadow: 0 25px 60px rgba(89, 57, 65, 0.18);
}
.avatar {
  width: 76px;
  height: 76px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #f6d9d7;
  color: #704953;
  font-size: 24px;
  font-weight: 700;
}
.eyebrow {
  font-size: 11px;
  letter-spacing: 4px;
  color: #d9aeb5;
  font-weight: 700;
}
.profile-hero h1 {
  font-size: 34px;
  margin: 5px 0;
}
.profile-hero p {
  margin: 0;
  color: #f3dfe0;
}
.logout {
  margin-left: auto;
  border: 1px solid rgba(255, 255, 255, 0.45);
  background: transparent;
  color: white;
  border-radius: 20px;
  padding: 9px 17px;
}
.panel,
.side-panel {
  height: 100%;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid #ead9d5;
  border-radius: 25px;
  padding: 32px;
  box-shadow: 0 18px 50px rgba(90, 58, 67, 0.07);
}
.panel h2 {
  font-weight: 400;
  color: #493838;
}
.quick-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-top: 25px;
}
.quick-grid a {
  padding: 22px;
  border-radius: 18px;
  background: #fff8f5;
  color: #60464d;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: 0.25s;
}
.quick-grid a:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 30px rgba(100, 60, 70, 0.1);
}
.quick-grid i {
  font-size: 25px;
  color: #a96776;
}
.quick-grid span {
  font-weight: 700;
}
.quick-grid small {
  color: #8c7778;
}
.mini-icon {
  width: 48px;
  height: 48px;
  border-radius: 15px;
  background: #f2dede;
  color: #8f5965;
  display: grid;
  place-items: center;
  font-size: 20px;
}
.side-panel h3 {
  margin-top: 18px;
  color: #493838;
}
.side-panel p {
  color: #796969;
  line-height: 1.8;
}
.side-panel a {
  color: #8f5965;
  text-decoration: none;
  font-weight: 600;
}
@media (max-width: 768px) {
  .profile-hero {
    flex-wrap: wrap;
  }
  .logout {
    margin-left: 0;
  }
  .quick-grid {
    grid-template-columns: 1fr;
  }
}
</style>
