<template>
  <section class="products-grid-section py-5">
    <div class="container py-lg-4">
      <div class="row g-4">
        <div
          v-for="product in products"
          :key="product.id"
          class="col-12 col-sm-6 col-lg-4"
        >
          <ProductComp
            :id="product.id"
            :title="product.title"
            :price="product.price"
            :image="product.image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProductComp from "@/components/Product-Comp.vue";
import { products } from "@/data/products";
</script>

<style scoped>
.products-grid-section {
  background-color: #fffaf8;
}
</style>
