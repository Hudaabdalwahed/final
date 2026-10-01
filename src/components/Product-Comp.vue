<template>
  <div class="card product-card h-100 border-0">
    <div class="product-image-wrapper">
      <button
        class="wish-btn"
        type="button"
        :class="{ active: wishlist.isFavorite(id) }"
        @click="toggleWishlist"
        :aria-label="`Save ${title}`"
      >
        <i
          :class="wishlist.isFavorite(id) ? 'bi bi-heart-fill' : 'bi bi-heart'"
        ></i>
      </button>
      <img :src="image" :alt="title" class="card-img-top product-image" />

      <div class="product-overlay">
        <router-link :to="`/products/${id}`" class="quick-view">
          <i class="bi bi-eye"></i>
          Quick View
        </router-link>
      </div>
    </div>

    <div class="card-body text-center">
      <p class="product-category mb-2">SPECIAL COLLECTION</p>

      <h5 class="card-title">
        {{ title }}
      </h5>

      <p class="product-price mb-3">${{ price }}</p>

      <button class="add-btn" @click="addToCart">
        <i class="bi bi-bag-plus"></i>
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import { useWishlistStore } from "@/stores/wishlist";

const props = defineProps<{
  id: number;
  title: string;
  price: number;
  image: string;
}>();

const emit = defineEmits<{
  added: [productId: number];
}>();

const cartStore = useCartStore();
const wishlist = useWishlistStore();

function toggleWishlist() {
  wishlist.toggle({
    id: props.id,
    title: props.title,
    price: props.price,
    image: props.image,
    description: "",
  });
}

function addToCart() {
  cartStore.addToCart({
    id: props.id,
    title: props.title,
    price: props.price,
    image: props.image,
    description: "",
  });

  emit("added", props.id);
}
</script>

<style scoped>
.product-card {
  background: #fff;
  overflow: hidden;
  transition: all 0.4s ease;
}

.product-card:hover {
  transform: translateY(-8px);
}

.wish-btn {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 3;
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  color: #8f5965;
  display: grid;
  place-items: center;
  transition: 0.25s ease;
}

.wish-btn:hover,
.wish-btn.active {
  background: #8f5965;
  color: white;
  transform: scale(1.05);
}

.product-image-wrapper {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1 / 1.15;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.product-card:hover .product-image {
  transform: scale(1.08);
}

.product-overlay {
  position: absolute;
  inset: 0;
  background: rgba(70, 40, 45, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.product-card:hover .product-overlay {
  opacity: 1;
}

.quick-view {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.95);
  color: #8f5965;
  padding: 10px 18px;
  border-radius: 3px;
  transform: translateY(15px);
  transition: all 0.4s ease;
}

.product-card:hover .quick-view {
  transform: translateY(0);
}

.product-category {
  color: #b0848d;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.card-title {
  color: #493838;
  font-size: 19px;
  font-weight: 500;
}

.product-price {
  color: #9a5d6a;
  font-size: 17px;
  font-weight: 600;
}

.add-btn {
  border: 1px solid #9a5d6a;
  background: transparent;
  color: #9a5d6a;
  padding: 9px 18px;
  border-radius: 3px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.add-btn:hover {
  background: #9a5d6a;
  color: white;
}
</style>
