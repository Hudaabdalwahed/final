<template>
  <section class="products-section py-5">
    <div class="container py-lg-5">
      <div class="text-center mb-5">
        <p class="section-label">OUR COLLECTION</p>

        <h2 class="section-title">Best <span>Sellers</span></h2>

        <p class="section-description mx-auto">
          Discover our most loved flowers, carefully selected to make every
          moment beautiful.
        </p>
      </div>

      <div v-if="message" class="added-message">
        <i class="bi bi-check-circle"></i>
        {{ message }}
      </div>

      <div class="row g-4">
        <div
          v-for="product in products.slice(0, 6)"
          :key="product.id"
          class="col-12 col-sm-6 col-lg-4"
        >
          <ProductComp
            :id="product.id"
            :title="product.title"
            :price="product.price"
            :image="product.image"
            @added="handleAdded"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProductComp from "@/components/Product-Comp.vue";
import { ref } from "vue";
import { products } from "@/data/products";

const message = ref("");

function handleAdded(productId: number) {
  const product = products.find((item) => item.id === productId);
  message.value = product
    ? `${product.title} added to cart.`
    : "Product added to cart.";

  window.setTimeout(() => {
    message.value = "";
  }, 1800);
}
</script>

<style scoped>
.products-section {
  background-color: #fffaf8;
}

.section-label {
  color: #a96776;
  font-size: 13px;
  letter-spacing: 4px;
  margin-bottom: 12px;
}

.section-title {
  color: #493838;
  font-size: 46px;
  font-weight: 500;
  margin-bottom: 18px;
}

.section-title span {
  color: #a96776;
}

.section-description {
  max-width: 600px;
  color: #796969;
  font-size: 16px;
  line-height: 1.8;
}

.added-message {
  margin: 0 auto 25px;
  width: fit-content;
  padding: 10px 16px;
  background: #f4eee9;
  color: #7d5b61;
  font-size: 13px;
}
.added-message i {
  margin-right: 6px;
}
@media (max-width: 768px) {
  .section-title {
    font-size: 36px;
  }
}
</style>
