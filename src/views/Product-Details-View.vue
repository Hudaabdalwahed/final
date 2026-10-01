<template>
  <main class="product-details-page">
    <div class="container py-5">
      <div class="row align-items-center g-5">
        <!-- Product Image -->
        <div class="col-lg-6">
          <div class="product-image-box">
            <img
              :src="product.image"
              :alt="product.title"
              class="product-image"
            />
          </div>
        </div>

        <!-- Product Information -->
        <div class="col-lg-6">
          <p class="product-label">SPECIAL COLLECTION</p>

          <h1 class="product-title">
            {{ product.title }}
          </h1>

          <p class="product-price">${{ product.price }}</p>

          <p class="product-description">
            {{ product.description }}
          </p>

          <!-- Quantity -->
          <div class="quantity-box">
            <button @click="decreaseQuantity">−</button>

            <span>{{ quantity }}</span>

            <button @click="increaseQuantity">+</button>
          </div>

          <!-- Add To Cart -->
          <button class="add-cart-btn" @click="addToCart">
            <i class="bi bi-bag-plus"></i>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { products } from "@/data/products";
import { useCartStore } from "@/stores/cart";

const route = useRoute();
const router = useRouter();

const cartStore = useCartStore();

const quantity = ref(1);

const productId = Number(route.params.id);

const product = products.find((item) => item.id === productId) ?? products[0];

function increaseQuantity() {
  quantity.value++;
}

function decreaseQuantity() {
  if (quantity.value > 1) {
    quantity.value--;
  }
}

function addToCart() {
  for (let i = 0; i < quantity.value; i++) {
    cartStore.addToCart(product);
  }

  router.push("/cart");
}
</script>

<style scoped>
.product-details-page {
  background-color: #fffaf8;
  min-height: 100vh;
}

.product-image-box {
  background-color: #f8eee9;
  overflow: hidden;
  aspect-ratio: 1 / 1;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-label {
  color: #a96776;
  font-size: 13px;
  letter-spacing: 4px;
  margin-bottom: 15px;
}

.product-title {
  color: #493838;
  font-size: 52px;
  font-weight: 500;
  margin-bottom: 15px;
}

.product-price {
  color: #9a5d6a;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 25px;
}

.product-description {
  color: #796969;
  font-size: 17px;
  line-height: 1.9;
  max-width: 500px;
  margin-bottom: 30px;
}

.quantity-box {
  display: flex;
  align-items: center;
  width: fit-content;
  border: 1px solid #decfd0;
  margin-bottom: 25px;
}

.quantity-box button {
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  color: #8f5965;
  font-size: 20px;
  cursor: pointer;
}

.quantity-box button:hover {
  background-color: #f8eee9;
}

.quantity-box span {
  width: 45px;
  text-align: center;
  color: #493838;
}

.add-cart-btn {
  border: none;
  background-color: #8f5965;
  color: white;
  padding: 14px 30px;
  border-radius: 3px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.add-cart-btn:hover {
  background-color: #6f424d;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .product-title {
    font-size: 40px;
  }

  .product-description {
    font-size: 16px;
  }
}
</style>
