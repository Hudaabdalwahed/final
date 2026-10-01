<template>
  <div>
    <NavBar />
    <router-view />
    <FooterComp />
  </div>
</template>

<script setup lang="ts">
import { provide } from "vue";
import NavBar from "./components/Nav-Bar.vue";
import FooterComp from "./components/Footer-Comp.vue";
import { SHOP_NAME_KEY } from "@/keys/shop";

provide(SHOP_NAME_KEY, "FLOWER");
</script>
