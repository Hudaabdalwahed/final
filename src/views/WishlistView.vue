<template>
  <main class="wishlist-page">
    <section class="wish-head">
      <div class="container">
        <p>YOUR LITTLE COLLECTION</p>
        <h1>Saved with <span>love</span>.</h1>
        <div class="leaf">
          <i class="bi bi-heart-fill"></i> {{ wishlist.count }} favorites
        </div>
      </div>
    </section>
    <div class="container pb-5">
      <div v-if="wishlist.items.length" class="row g-4">
        <div
          v-for="product in wishlist.items"
          :key="product.id"
          class="col-12 col-sm-6 col-lg-3"
        >
          <article class="wish-card">
            <button class="remove" @click="wishlist.toggle(product)">
              <i class="bi bi-x-lg"></i></button
            ><img :src="product.image" :alt="product.title" />
            <div class="p-3">
              <p>{{ product.title }}</p>
              <strong>${{ product.price }}</strong
              ><router-link :to="`/products/${product.id}`"
                >View flower <i class="bi bi-arrow-right"></i
              ></router-link>
            </div>
          </article>
        </div>
      </div>
      <div v-else class="empty">
        <i class="bi bi-heart"></i>
        <h2>Nothing saved yet.</h2>
        <p>When a flower steals your heart, save it here.</p>
        <router-link to="/products" class="shop-btn"
          >Explore Flowers</router-link
        >
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { useWishlistStore } from "@/stores/wishlist";
const wishlist = useWishlistStore();
</script>
<style scoped>
.wishlist-page {
  min-height: 80vh;
  background: #fffaf8;
}
.wish-head {
  padding: 80px 0 55px;
  background: linear-gradient(135deg, #f5e3e1, #f3ede4);
}
.wish-head p {
  color: #a96776;
  letter-spacing: 4px;
  font-size: 11px;
}
.wish-head h1 {
  font-size: 54px;
  color: #493838;
  font-weight: 400;
  margin: 10px 0;
}
.wish-head h1 span {
  color: #a96776;
}
.leaf {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  color: #765b60;
  background: rgba(255, 255, 255, 0.7);
  padding: 8px 14px;
  border-radius: 20px;
}
.wish-card {
  position: relative;
  background: white;
  border: 1px solid #eadbd7;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(90, 60, 65, 0.06);
  height: 100%;
  transition: 0.25s;
}
.wish-card:hover {
  transform: translateY(-5px);
}
.wish-card img {
  width: 100%;
  height: 270px;
  object-fit: cover;
}
.wish-card p {
  color: #5d484c;
  margin: 0 0 5px;
}
.wish-card strong {
  display: block;
  color: #a96776;
  margin-bottom: 12px;
}
.wish-card a {
  font-size: 12px;
  color: #8f5965;
  text-decoration: none;
}
.remove {
  position: absolute;
  right: 12px;
  top: 12px;
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  color: #8f5965;
}
.empty {
  text-align: center;
  padding: 100px 20px;
}
.empty > i {
  font-size: 55px;
  color: #c18a95;
}
.empty h2 {
  font-weight: 400;
  color: #493838;
}
.empty p {
  color: #796969;
}
.shop-btn {
  display: inline-block;
  margin-top: 15px;
  background: #8f5965;
  color: white;
  padding: 12px 20px;
  border-radius: 22px;
  text-decoration: none;
}
</style>
