<template>
  <main class="checkout-page">
    <!-- Header -->
    <section class="checkout-header">
      <div class="container text-center">
        <p class="page-label">CHECKOUT</p>

        <h1 class="page-title">Complete Your <span>Order</span></h1>

        <p class="page-description">
          Enter your information to complete your flower order.
        </p>
      </div>
    </section>

    <!-- Checkout -->
    <section class="checkout-section py-5">
      <div class="container">
        <div class="row g-5">
          <!-- Customer Information -->
          <div class="col-lg-7">
            <div class="checkout-card">
              <h2>Customer Information</h2>

              <div class="row g-3">
                <div class="col-md-6">
                  <label>First Name</label>

                  <input
                    v-model="form.firstName"
                    type="text"
                    class="form-control"
                    placeholder="Enter your first name"
                  />
                </div>

                <div class="col-md-6">
                  <label>Last Name</label>

                  <input
                    v-model="form.lastName"
                    type="text"
                    class="form-control"
                    placeholder="Enter your last name"
                  />
                </div>

                <div class="col-12">
                  <label>Email</label>

                  <input
                    v-model="form.email"
                    type="email"
                    class="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div class="col-12">
                  <label>Phone</label>

                  <input
                    v-model="form.phone"
                    type="tel"
                    class="form-control"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div class="col-12">
                  <label>Address</label>

                  <input
                    v-model="form.address"
                    type="text"
                    class="form-control"
                    placeholder="Enter your address"
                  />
                </div>

                <div class="col-md-6">
                  <label>City</label>

                  <input
                    v-model="form.city"
                    type="text"
                    class="form-control"
                    placeholder="Enter your city"
                  />
                </div>

                <div class="col-md-6">
                  <label>Postal Code</label>

                  <input
                    v-model="form.postalCode"
                    type="text"
                    class="form-control"
                    placeholder="Postal code"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Order Summary -->
          <div class="col-lg-5">
            <div class="order-card">
              <h2>Your Order</h2>

              <div
                v-for="product in cartStore.items"
                :key="product.id"
                class="order-item"
              >
                <img :src="product.image" :alt="product.title" />

                <div class="order-info">
                  <h5>{{ product.title }}</h5>

                  <p>Qty: {{ product.quantity }}</p>
                </div>

                <strong> ${{ product.price * product.quantity }} </strong>
              </div>

              <div class="summary-line"></div>

              <div class="total-row">
                <span>Total</span>

                <strong> ${{ cartStore.cartTotal }} </strong>
              </div>
              <button class="place-order-btn" @click="placeOrder">
                Place Order
                <i class="bi bi-arrow-right"></i>
              </button>

              <router-link to="/cart" class="back-cart">
                ← Back to Cart
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/cart";
import { useOrdersStore } from "@/stores/orders";
import { useAuthStore } from "@/stores/auth";

const router = useRouter();
const cartStore = useCartStore();
const ordersStore = useOrdersStore();
const auth = useAuthStore();

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postalCode: "",
});

function placeOrder() {
  if (!cartStore.items.length) return;
  const customerName =
    `${form.firstName} ${form.lastName}`.trim() ||
    auth.user?.name ||
    "Flower Customer";
  ordersStore.createOrder(cartStore.items, cartStore.cartTotal, customerName);
  cartStore.items = [];
  localStorage.removeItem("flower-cart");
  router.push("/order-confirmation");
}
</script>

<style scoped>
.checkout-page {
  background-color: #fffaf8;
  min-height: 100vh;
}

.checkout-header {
  background-color: #fff;
  padding: 80px 0 50px;
}

.page-label {
  color: #a96776;
  font-size: 13px;
  letter-spacing: 4px;
  margin-bottom: 12px;
}

.page-title {
  color: #493838;
  font-size: 52px;
  font-weight: 500;
  margin-bottom: 18px;
}

.page-title span {
  color: #a96776;
}

.page-description {
  color: #796969;
  font-size: 16px;
}

.checkout-card,
.order-card {
  background-color: #fff;
  border: 1px solid #f1e3df;
  padding: 35px;
}

.checkout-card h2,
.order-card h2 {
  color: #493838;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 30px;
}

label {
  display: block;
  color: #493838;
  font-size: 14px;
  margin-bottom: 8px;
}

.form-control {
  border: 1px solid #decfd0;
  border-radius: 3px;
  padding: 12px 14px;
  color: #493838;
}

.form-control:focus {
  border-color: #a96776;
  box-shadow: 0 0 0 0.15rem rgba(169, 103, 118, 0.1);
}

/* Order */

.order-card {
  position: sticky;
  top: 30px;
}

.order-item {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 18px;
}

.order-item img {
  width: 65px;
  height: 70px;
  object-fit: cover;
}

.order-info {
  flex: 1;
}

.order-info h5 {
  color: #493838;
  font-size: 16px;
  margin-bottom: 5px;
}

.order-info p {
  color: #9a5d6a;
  font-size: 13px;
  margin: 0;
}

.order-item strong {
  color: #493838;
  font-size: 15px;
}

.summary-line {
  height: 1px;
  background-color: #eee0dc;
  margin: 25px 0;
}

.total-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #493838;
  font-size: 20px;
  margin-bottom: 25px;
}

.total-row strong {
  color: #9a5d6a;
}

.place-order-btn {
  width: 100%;
  border: none;
  background-color: #8f5965;
  color: white;
  padding: 14px;
  border-radius: 3px;
  transition: 0.3s;
}

.place-order-btn:hover {
  background-color: #6f424d;
  transform: translateY(-2px);
}

.place-order-btn i {
  margin-left: 8px;
}

.back-cart {
  display: block;
  text-align: center;
  margin-top: 18px;
  color: #8f5965;
  text-decoration: none;
  font-size: 14px;
}

.back-cart:hover {
  color: #6f424d;
}

@media (max-width: 768px) {
  .checkout-header {
    padding: 60px 0 40px;
  }

  .page-title {
    font-size: 40px;
  }

  .checkout-card,
  .order-card {
    padding: 25px;
  }

  .order-card {
    position: static;
  }
}
</style>
