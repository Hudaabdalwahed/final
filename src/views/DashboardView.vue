<template>
  <main class="dashboard-page">
    <section class="dashboard-header">
      <div class="container">
        <div class="header-content">
          <div>
            <p class="eyebrow">FLOWER ADMIN</p>
            <h1>Dashboard</h1>
            <p class="welcome">Welcome back to {{ shopName }}.</p>
          </div>
          <div class="date-box">
            <i class="bi bi-calendar3"></i>
            {{ today }}
          </div>
        </div>
      </div>
    </section>

    <section class="dashboard-content">
      <div class="container">
        <div class="row g-4">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="col-12 col-sm-6 col-xl-3"
          >
            <div class="stat-card">
              <div class="stat-icon">
                <i :class="stat.icon"></i>
              </div>
              <div>
                <p>{{ stat.label }}</p>
                <h3>{{ stat.value }}</h3>
              </div>
            </div>
          </div>
        </div>

        <div class="dashboard-grid mt-4">
          <section class="panel">
            <div class="panel-heading">
              <div>
                <p class="eyebrow">PRODUCTS</p>
                <h2>Flower Collection</h2>
              </div>
              <span class="count">{{ products.length }} products</span>
            </div>

            <div class="search-box">
              <i class="bi bi-search"></i>
              <input
                v-focus
                v-model="search"
                type="search"
                placeholder="Search products..."
              />
            </div>

            <div class="table-responsive">
              <table class="table align-middle">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in filteredProducts" :key="product.id">
                    <td>
                      <div class="product-cell">
                        <img :src="product.image" :alt="product.title" />
                        <span>{{ product.title }}</span>
                      </div>
                    </td>
                    <td>{{ formatPrice(product.price) }}</td>
                    <td><span class="status">Available</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p v-if="filteredProducts.length === 0" class="empty-search">
              No products found.
            </p>
          </section>

          <section class="panel quick-panel">
            <p class="eyebrow">QUICK VIEW</p>
            <h2>Store Overview</h2>

            <div class="overview-item">
              <span><i class="bi bi-box-seam"></i> Products</span>
              <strong>{{ products.length }}</strong>
            </div>
            <div class="overview-item">
              <span><i class="bi bi-bag-heart"></i> Cart items</span>
              <strong>{{ cartStore.cartCount }}</strong>
            </div>
            <div class="overview-item">
              <span><i class="bi bi-currency-dollar"></i> Cart total</span>
              <strong>{{ formatPrice(cartStore.cartTotal) }}</strong>
            </div>
            <div class="overview-item">
              <span><i class="bi bi-receipt"></i> Orders</span>
              <strong>{{ ordersStore.orderCount }}</strong>
            </div>
            <div class="overview-item">
              <span><i class="bi bi-graph-up-arrow"></i> Revenue</span>
              <strong>{{ formatPrice(ordersStore.revenue) }}</strong>
            </div>

            <router-link to="/products" class="dashboard-btn">
              Manage Store
              <i class="bi bi-arrow-right"></i>
            </router-link>
          </section>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { computed, defineComponent, inject, onMounted, ref, watch } from "vue";
import { products } from "@/data/products";
import { useCartStore } from "@/stores/cart";
import { useOrdersStore } from "@/stores/orders";
import { SHOP_NAME_KEY } from "@/keys/shop";
import vFocus from "@/directives/focus";
import shopMixin from "@/mixins/shopMixin";

export default defineComponent({
  name: "DashboardView",
  mixins: [shopMixin],

  directives: {
    focus: vFocus,
  },

  setup() {
    const cartStore = useCartStore();
    const ordersStore = useOrdersStore();
    const shopName = inject(SHOP_NAME_KEY, "FLOWER");
    const search = ref("");
    const today = ref("");

    const filteredProducts = computed(() => {
      const value = search.value.trim().toLowerCase();

      if (!value) return products;

      return products.filter((product) =>
        product.title.toLowerCase().includes(value)
      );
    });

    const stats = computed(() => [
      {
        label: "Products",
        value: products.length,
        icon: "bi bi-flower1",
      },
      {
        label: "Cart Items",
        value: cartStore.cartCount,
        icon: "bi bi-bag-heart",
      },
      {
        label: "Cart Total",
        value: `$${cartStore.cartTotal}`,
        icon: "bi bi-currency-dollar",
      },
      {
        label: "Orders",
        value: ordersStore.orderCount,
        icon: "bi bi-receipt",
      },
    ]);

    onMounted(() => {
      today.value = new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
      }).format(new Date());
    });

    watch(search, (value) => {
      search.value = value;
    });

    return {
      cartStore,
      ordersStore,
      products,
      shopName,
      search,
      today,
      filteredProducts,
      stats,
    };
  },
});
</script>

<style scoped>
.dashboard-page {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background: radial-gradient(
      circle at 8% 10%,
      rgba(229, 166, 181, 0.28),
      transparent 24%
    ),
    radial-gradient(
      circle at 92% 12%,
      rgba(196, 225, 207, 0.35),
      transparent 23%
    ),
    linear-gradient(135deg, #fff9f7 0%, #f8f1ed 48%, #eef5f0 100%);
  color: #493838;
}

.dashboard-page::before,
.dashboard-page::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(2px);
}

.dashboard-page::before {
  width: 260px;
  height: 260px;
  top: 360px;
  left: -130px;
  background: rgba(204, 143, 157, 0.14);
}

.dashboard-page::after {
  width: 320px;
  height: 320px;
  top: 120px;
  right: -160px;
  background: rgba(139, 180, 151, 0.15);
}

.dashboard-header,
.dashboard-content {
  position: relative;
  z-index: 1;
}

.dashboard-header {
  padding: 58px 0 38px;
  background: linear-gradient(
    120deg,
    rgba(143, 89, 101, 0.96),
    rgba(177, 113, 127, 0.92)
  );
  color: white;
  box-shadow: 0 20px 45px rgba(117, 75, 85, 0.16);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 25px;
}

.eyebrow {
  color: #d9aeb7;
  font-size: 10px;
  letter-spacing: 3px;
  font-weight: 700;
  margin-bottom: 8px;
}

.dashboard-header .eyebrow {
  color: #f7dce1;
}

h1 {
  font-size: 50px;
  font-weight: 600;
  margin: 0 0 8px;
  letter-spacing: -1px;
}

.welcome {
  color: #f7e8ea;
  margin: 0;
}

.date-box {
  padding: 12px 17px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 16px;
  color: white;
  background: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(10px);
}

.dashboard-content {
  padding: 42px 0 80px;
}

.stat-card {
  position: relative;
  overflow: hidden;
  height: 100%;
  padding: 23px;
  display: flex;
  align-items: center;
  gap: 16px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 14px 35px rgba(117, 75, 85, 0.1);
  backdrop-filter: blur(12px);
  transition: 0.3s ease;
}

.stat-card::after {
  content: "";
  position: absolute;
  width: 80px;
  height: 80px;
  right: -28px;
  bottom: -28px;
  border-radius: 50%;
  background: rgba(170, 111, 125, 0.09);
}

.stat-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(117, 75, 85, 0.16);
}

.stat-icon {
  width: 54px;
  height: 54px;
  flex: 0 0 54px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: linear-gradient(135deg, #8f5965, #bd8290);
  color: white;
  font-size: 21px;
  box-shadow: 0 8px 18px rgba(143, 89, 101, 0.2);
}

.stat-card p {
  margin: 0 0 4px;
  color: #8f7777;
  font-size: 12px;
}

.stat-card h3 {
  margin: 0;
  color: #493838;
  font-size: 25px;
  font-weight: 600;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
}

.panel {
  border: 1px solid rgba(255, 255, 255, 0.78);
  border-radius: 24px;
  padding: 28px;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: 0 16px 38px rgba(117, 75, 85, 0.1);
  backdrop-filter: blur(12px);
}

.panel-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 22px;
}

.panel h2 {
  margin: 0;
  font-size: 25px;
  font-weight: 600;
}

.count {
  padding: 7px 11px;
  border-radius: 20px;
  background: #f8e9ec;
  color: #955c6b;
  font-size: 12px;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #e1d0d1;
  border-radius: 14px;
  padding: 10px 13px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.75);
  transition: 0.3s ease;
}

.search-box:focus-within {
  border-color: #b47a87;
  box-shadow: 0 0 0 4px rgba(180, 122, 135, 0.1);
}

.search-box i {
  color: #a96776;
}

.search-box input {
  border: 0;
  outline: 0;
  width: 100%;
  background: transparent;
  color: #493838;
}

.table {
  margin-bottom: 0;
}

.table th {
  color: #8f7777;
  font-size: 12px;
  font-weight: 600;
  border-bottom-color: #ead9d5;
}

.table td {
  color: #493838;
  border-bottom-color: #f0e4e1;
}

.product-cell {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
}

.product-cell img {
  width: 46px;
  height: 54px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 5px 12px rgba(117, 75, 85, 0.12);
}

.status {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 20px;
  background: #e7f3ea;
  color: #4e8560;
  font-size: 11px;
  font-weight: 600;
}

.empty-search {
  color: #8f7777;
  margin: 20px 0 0;
}

.quick-panel {
  background: linear-gradient(
    150deg,
    rgba(255, 255, 255, 0.9),
    rgba(249, 237, 239, 0.88)
  );
}

.quick-panel h2 {
  margin-bottom: 25px;
}

.overview-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 0;
  border-bottom: 1px solid #eadfe0;
}

.overview-item span {
  color: #796969;
}

.overview-item i {
  color: #a96776;
  margin-right: 8px;
}

.overview-item strong {
  color: #493838;
  font-size: 17px;
}

.dashboard-btn {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 25px;
  padding: 14px;
  border-radius: 14px;
  background: linear-gradient(135deg, #8f5965, #b97888);
  color: white;
  text-decoration: none;
  box-shadow: 0 10px 22px rgba(143, 89, 101, 0.2);
  transition: 0.3s ease;
}

.dashboard-btn:hover {
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 14px 26px rgba(143, 89, 101, 0.28);
}

@media (max-width: 991px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 575px) {
  .header-content {
    align-items: flex-start;
    flex-direction: column;
  }

  h1 {
    font-size: 40px;
  }

  .panel {
    padding: 20px;
  }

  .date-box {
    width: 100%;
  }
}
</style>
