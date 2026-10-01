<template>
  <main class="orders-page">
    <div class="container py-5">
      <div class="orders-head">
        <div>
          <p class="eyebrow">YOUR FLOWER JOURNEY</p>
          <h1>My Orders</h1>
        </div>
        <router-link to="/products" class="shop-link"
          >Shop again <i class="bi bi-arrow-right"></i
        ></router-link>
      </div>
      <div v-if="orders.orders.length" class="orders-list">
        <article
          v-for="order in orders.orders"
          :key="order.id"
          class="order-card"
        >
          <div class="order-top">
            <div>
              <span class="order-id">{{ order.id }}</span
              ><small>{{ order.date }}</small>
            </div>
            <span class="status">{{ order.status }}</span>
          </div>
          <div class="order-body">
            <div class="thumbs">
              <img
                v-for="item in order.items.slice(0, 4)"
                :key="item.id"
                :src="item.image"
                :alt="item.title"
              />
            </div>
            <div class="summary">
              <strong
                >{{ order.items.length }} flower item{{
                  order.items.length > 1 ? "s" : ""
                }}</strong
              >
              <p>{{ order.customerName }}</p>
            </div>
            <div class="total">${{ order.total.toFixed(2) }}</div>
          </div>
        </article>
      </div>
      <div v-else class="empty">
        <i class="bi bi-box-seam"></i>
        <h2>Your order story starts here.</h2>
        <p>Place your first flower order and it will appear here.</p>
        <router-link to="/products" class="shop-link"
          >Start shopping</router-link
        >
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { useOrdersStore } from "@/stores/orders";
const orders = useOrdersStore();
</script>
<style scoped>
.orders-page {
  min-height: 80vh;
  background: linear-gradient(145deg, #fffaf8, #f2ece5);
}
.orders-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 30px;
}
.eyebrow {
  color: #a96776;
  letter-spacing: 4px;
  font-size: 11px;
  font-weight: 700;
}
.orders-head h1 {
  font-size: 48px;
  font-weight: 400;
  color: #493838;
}
.shop-link {
  color: #fff;
  background: #8f5965;
  padding: 11px 18px;
  border-radius: 24px;
  text-decoration: none;
  border: 0;
}
.orders-list {
  display: grid;
  gap: 18px;
}
.order-card {
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid #eadbd7;
  border-radius: 22px;
  padding: 22px;
  box-shadow: 0 12px 35px rgba(90, 60, 65, 0.06);
}
.order-top,
.order-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.order-id {
  display: block;
  color: #60464d;
  font-weight: 700;
}
.order-top small {
  color: #9a8584;
}
.status {
  background: #e7f2e7;
  color: #557657;
  border-radius: 20px;
  padding: 7px 13px;
  font-size: 12px;
}
.order-body {
  margin-top: 18px;
  border-top: 1px solid #eee1dd;
  padding-top: 18px;
}
.thumbs {
  display: flex;
}
.thumbs img {
  width: 58px;
  height: 58px;
  object-fit: cover;
  border-radius: 12px;
  border: 3px solid white;
  margin-right: -10px;
}
.summary {
  flex: 1;
  margin-left: 15px;
}
.summary strong {
  color: #60464d;
}
.summary p {
  margin: 5px 0 0;
  color: #8b7778;
}
.total {
  font-size: 22px;
  color: #a96776;
  font-weight: 700;
}
.empty {
  text-align: center;
  padding: 100px 20px;
}
.empty i {
  font-size: 55px;
  color: #b77e89;
}
.empty h2 {
  font-weight: 400;
  color: #493838;
}
.empty p {
  color: #796969;
}
@media (max-width: 600px) {
  .orders-head {
    align-items: start;
    flex-direction: column;
    gap: 18px;
  }
  .order-body {
    align-items: start;
  }
  .total {
    margin-left: auto;
  }
  .summary {
    display: none;
  }
}
</style>
