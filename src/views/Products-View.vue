<template>
  <main class="products-page">
    <section class="products-hero">
      <div class="container hero-inner">
        <div>
          <p class="section-kicker">THE FLOWER EDIT</p>
          <h1>Find a little <em>beauty</em>.</h1>
          <p>
            Fresh, elegant arrangements for birthdays, celebrations, quiet
            moments and everything in between.
          </p>
        </div>
        <div class="hero-art">
          <img src="@/assets/images/13.jpg" alt="Flower bouquet" />
        </div>
      </div>
    </section>
    <section class="container catalog py-5">
      <div class="toolbar">
        <div class="search">
          <i class="bi bi-search"></i
          ><input v-focus v-model="search" placeholder="Search flowers..." />
        </div>
        <div class="filters">
          <button
            v-for="f in filters"
            :key="f"
            :class="['filter', { active: filter === f }]"
            @click="filter = f"
          >
            {{ f }}</button
          ><select v-model="sort">
            <option value="featured">Featured</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
            <option value="name">Name A–Z</option>
          </select>
        </div>
      </div>
      <div class="result-line">
        <span>{{ filtered.length }} arrangements</span
        ><span v-if="search">Results for “{{ search }}”</span>
      </div>
      <div v-if="filtered.length" class="row g-4">
        <div
          v-for="product in filtered"
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
      <div v-else class="empty">
        <i class="bi bi-flower1"></i>
        <h2>No flowers found</h2>
        <p>Try another search or clear the filters.</p>
        <button class="btn-flower" @click="clear">Show everything</button>
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import ProductComp from "@/components/Product-Comp.vue";
import { products } from "@/data/products";
import { vFocus } from "@/directives/focus";
const route = useRoute();
const search = ref(String(route.query.search || ""));
const filter = ref("All");
const sort = ref("featured");
const filters = ["All", "Under $50", "$50–$59", "$60+"];
const filtered = computed(() => {
  let list = products.filter(
    (p) =>
      p.title.toLowerCase().includes(search.value.toLowerCase()) ||
      p.description.toLowerCase().includes(search.value.toLowerCase())
  );
  if (filter.value !== "All")
    list = list.filter((p) =>
      filter.value === "Under $50"
        ? p.price < 50
        : filter.value === "$50–$59"
        ? p.price >= 50 && p.price < 60
        : p.price >= 60
    );
  return [...list].sort((a, b) =>
    sort.value === "low"
      ? a.price - b.price
      : sort.value === "high"
      ? b.price - a.price
      : sort.value === "name"
      ? a.title.localeCompare(b.title)
      : a.id - b.id
  );
});
watch(
  () => route.query.search,
  (v) => {
    search.value = String(v || "");
  }
);
function clear() {
  search.value = "";
  filter.value = "All";
  sort.value = "featured";
}
</script>
<style scoped>
.products-page {
  background: #fffaf7;
  min-height: 80vh;
}
.products-hero {
  overflow: hidden;
  background: linear-gradient(115deg, #f4e4e1 0%, #fbf5ee 55%, #e9eee7 100%);
  padding: 75px 0 45px;
}
.hero-inner {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 60px;
}
.hero-inner h1 {
  font-family: "DM Serif Display", Georgia, serif;
  font-size: 72px;
  font-weight: 400;
  line-height: 1;
  color: #49383c;
  margin: 12px 0 18px;
}
.hero-inner h1 em {
  color: #9d6270;
}
.hero-inner p:not(.section-kicker) {
  max-width: 550px;
  color: #77686a;
  line-height: 1.8;
}
.hero-art {
  height: 300px;
  border-radius: 180px 180px 20px 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(76, 48, 55, 0.09);
  transform: rotate(2deg);
}
.hero-art img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.catalog {
  padding-bottom: 90px !important;
}
.toolbar {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
}
.search {
  width: 290px;
  height: 48px;
  background: #fff;
  border: 1px solid #e7d9d5;
  border-radius: 999px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 16px;
}
.search i {
  color: #9d6270;
}
.search input {
  border: 0;
  outline: 0;
  width: 100%;
  background: transparent;
}
.filters {
  display: flex;
  gap: 7px;
  align-items: center;
  flex-wrap: wrap;
}
.filter {
  border: 1px solid #e5d8d4;
  background: #fff;
  color: #766568;
  border-radius: 999px;
  padding: 9px 13px;
  font-size: 12px;
}
.filter.active,
.filter:hover {
  background: #754b55;
  color: #fff;
  border-color: #754b55;
}
.filters select {
  border: 1px solid #e5d8d4;
  background: #fff;
  border-radius: 999px;
  padding: 9px 13px;
  color: #766568;
  font-size: 12px;
}
.result-line {
  display: flex;
  justify-content: space-between;
  color: #9a8788;
  font-size: 12px;
  margin: 18px 0;
}
.empty {
  text-align: center;
  padding: 90px 20px;
}
.empty i {
  font-size: 55px;
  color: #b77e89;
}
.empty h2 {
  font-family: "DM Serif Display", Georgia, serif;
  font-size: 40px;
  font-weight: 400;
}
.empty p {
  color: #7e6a6d;
}
@media (max-width: 850px) {
  .hero-inner {
    grid-template-columns: 1fr;
  }
  .hero-art {
    height: 250px;
    max-width: 420px;
  }
  .hero-inner h1 {
    font-size: 55px;
  }
  .toolbar {
    flex-direction: column;
    align-items: stretch;
  }
  .search {
    width: 100%;
  }
}
@media (max-width: 500px) {
  .hero-inner h1 {
    font-size: 46px;
  }
  .products-hero {
    padding-top: 50px;
  }
  .filters {
    overflow: auto;
    flex-wrap: nowrap;
    padding-bottom: 4px;
  }
  .result-line {
    gap: 10px;
    flex-direction: column;
  }
}
</style>
