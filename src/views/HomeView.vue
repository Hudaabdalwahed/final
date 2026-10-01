<template>
  <main>
    <HeroComp />
    <section class="promise">
      <div class="container">
        <div v-for="item in promises" :key="item.title" class="promise-item">
          <span><i :class="item.icon"></i></span>
          <div>
            <strong>{{ item.title }}</strong>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>
    <AboutComp /><ProductGrid />
    <section class="editorial">
      <div class="container editorial-inner">
        <div class="editorial-copy">
          <p class="section-kicker">A LITTLE SOMETHING SPECIAL</p>
          <h2>Flowers make ordinary days feel <em>extraordinary.</em></h2>
          <p>
            Choose a bouquet, add a handwritten note, and let us take care of
            the beautiful details.
          </p>
          <router-link to="/products" class="btn-flower"
            >Explore the collection <i class="bi bi-arrow-right"></i
          ></router-link>
        </div>
        <div class="editorial-photo">
          <img src="@/assets/images/16.jpg" alt="Elegant flower arrangement" />
        </div>
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import HeroComp from "@/components/Hero-Comp.vue";
import AboutComp from "@/components/About-Comp.vue";
import ProductGrid from "@/components/Product-Grid.vue";
const promises = [
  {
    icon: "bi bi-flower1",
    title: "Freshly styled",
    text: "Thoughtful arrangements made with care.",
  },
  {
    icon: "bi bi-truck",
    title: "Careful delivery",
    text: "Beautifully packed from our door to yours.",
  },
  {
    icon: "bi bi-heart",
    title: "Made for moments",
    text: "Flowers for the big days and small ones.",
  },
];
</script>
<style scoped>
.promise {
  background: #fff;
  padding: 24px 0;
  border-bottom: 1px solid #eee1dd;
}
.promise .container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}
.promise-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
}
.promise-item > span {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #f7e9e6;
  color: #9d6270;
  font-size: 18px;
}
.promise-item strong {
  font-size: 13px;
  color: #49383d;
}
.promise-item p {
  font-size: 11px;
  color: #8d7a7d;
  margin: 3px 0 0;
}
.editorial {
  padding: 100px 0;
  background: linear-gradient(135deg, #f5e7e3, #f9f4ed);
}
.editorial-inner {
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  align-items: center;
  gap: 70px;
}
.editorial-copy h2 {
  font-family: "DM Serif Display", Georgia, serif;
  font-size: 56px;
  line-height: 1.08;
  font-weight: 400;
  color: #49383d;
  margin: 12px 0 18px;
}
.editorial-copy h2 em {
  color: #9d6270;
}
.editorial-copy > p:not(.section-kicker) {
  color: #7d6c6e;
  line-height: 1.8;
  max-width: 520px;
  margin-bottom: 28px;
}
.editorial-photo {
  height: 430px;
  border-radius: 180px 180px 25px 25px;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(80, 52, 60, 0.14);
  transform: rotate(2deg);
}
.editorial-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media (max-width: 800px) {
  .promise .container {
    grid-template-columns: 1fr;
  }
  .promise-item {
    justify-content: flex-start;
  }
  .editorial-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .editorial-copy h2 {
    font-size: 43px;
  }
  .editorial-photo {
    height: 360px;
    max-width: 430px;
  }
}
</style>
