<template>
  <main class="cart-page">
    <!-- Header -->
    <section class="cart-header">
      <div class="container text-center">
        <p class="page-label">YOUR SHOPPING BAG</p>

        <h1 class="page-title">Your <span>Cart</span></h1>

        <p class="page-description">
          Review your selected flowers before placing your order.
        </p>
      </div>
    </section>

    <!-- Cart -->
    <section class="cart-section py-5">
      <div class="container">
        <!-- Empty Cart -->
        <div v-if="cartStore.items.length === 0" class="empty-cart text-center">
          <i class="bi bi-bag-heart empty-icon"></i>

          <h2>Your cart is empty</h2>

          <p>You haven't added any flowers yet.</p>

          <router-link to="/products" class="continue-btn">
            Continue Shopping
          </router-link>
        </div>

        <!-- Cart With Products -->
        <div v-else>
          <div class="row g-4">
            <!-- Products -->
            <div class="col-lg-8">
              <div
                v-for="product in cartStore.items"
                :key="product.id"
                class="cart-item"
              >
                <!-- Image -->
                <img
                  :src="product.image"
                  :alt="product.title"
                  class="cart-image"
                />

                <!-- Info -->
                <div class="cart-info">
                  <h5>
                    {{ product.title }}
                  </h5>

                  <p class="unit-price">${{ product.price }} each</p>

                  <!-- Quantity -->
                  <div class="quantity-box">
                    <button @click="cartStore.decreaseQuantity(product.id)">
                      −
                    </button>

                    <span>
                      {{ product.quantity }}
                    </span>

                    <button @click="cartStore.increaseQuantity(product.id)">
                      +
                    </button>
                  </div>

                  <!-- Remove -->
                  <button
                    class="remove-btn"
                    @click="cartStore.removeFromCart(product.id)"
                  >
                    <i class="bi bi-trash"></i>
                    Remove
                  </button>
                </div>

                <!-- Product Total -->
                <div class="item-price">
                  ${{ product.price * product.quantity }}
                </div>
              </div>
            </div>

            <!-- Summary -->
            <div class="col-lg-4">
              <div class="cart-summary">
                <h3>Order Summary</h3>

                <div class="summary-row">
                  <span>Items</span>

                  <span>
                    {{ cartStore.cartCount }}
                  </span>
                </div>

                <div class="summary-row">
                  <span>Subtotal</span>

                  <span> ${{ itemSubtotal }} </span>
                </div>

                <div class="summary-line"></div>

                <div class="summary-total">
                  <span>Total</span>

                  <strong> ${{ itemSubtotal }} </strong>
                </div>

                <button class="checkout-btn" @click="$router.push('/checkout')">
                  Proceed to Checkout
                </button>

                <router-link to="/products" class="continue-shopping">
                  Continue Shopping
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from "vue";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();

const itemSubtotal = computed(() =>
  cartStore.items.reduce((total, item) => total + item.price * item.quantity, 0)
);

onMounted(() => {
  const savedCart = localStorage.getItem("flower-cart");

  if (savedCart) {
    try {
      cartStore.items = JSON.parse(savedCart);
    } catch {
      localStorage.removeItem("flower-cart");
    }
  }
});

watch(
  () => cartStore.items,
  (items) => {
    localStorage.setItem("flower-cart", JSON.stringify(items));
  },
  { deep: true }
);
</script>

<style scoped>
.cart-page {
  background-color: #fffaf8;
  min-height: 100vh;
}

/* Header */

.cart-header {
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

/* Empty Cart */

.empty-cart {
  padding: 70px 20px;
  background-color: #fff;
  border: 1px solid #f1e3df;
}

.empty-icon {
  color: #a96776;
  font-size: 55px;
  margin-bottom: 20px;
}

.empty-cart h2 {
  color: #493838;
  font-size: 28px;
}

.empty-cart p {
  color: #796969;
  margin-bottom: 25px;
}

.continue-btn {
  display: inline-block;
  background-color: #8f5965;
  color: white;
  padding: 13px 25px;
  text-decoration: none;
  border-radius: 3px;
  transition: 0.3s;
}

.continue-btn:hover {
  background-color: #6f424d;
}

/* Cart Item */

.cart-item {
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #fff;
  padding: 20px;
  margin-bottom: 18px;
  border: 1px solid #f1e3df;
}

.cart-image {
  width: 110px;
  height: 120px;
  object-fit: cover;
}

.cart-info {
  flex: 1;
}

.cart-info h5 {
  color: #493838;
  font-size: 19px;
  margin-bottom: 8px;
}

.unit-price {
  color: #9a5d6a;
  font-weight: 600;
  margin-bottom: 12px;
}

/* Quantity */

.quantity-box {
  display: flex;
  align-items: center;
  width: fit-content;
  border: 1px solid #decfd0;
  margin-bottom: 12px;
}

.quantity-box button {
  width: 35px;
  height: 35px;
  border: none;
  background-color: transparent;
  color: #8f5965;
  font-size: 20px;
  cursor: pointer;
}

.quantity-box button:hover {
  background-color: #f8eee9;
}

.quantity-box span {
  width: 40px;
  text-align: center;
  color: #493838;
  font-size: 15px;
}

/* Remove */

.remove-btn {
  border: none;
  background: transparent;
  color: #a96776;
  padding: 0;
  font-size: 14px;
}

.remove-btn:hover {
  color: #7d4350;
}

/* Item Price */

.item-price {
  color: #493838;
  font-weight: 600;
  font-size: 17px;
}

/* Summary */

.cart-summary {
  background-color: #fff;
  border: 1px solid #f1e3df;
  padding: 30px;
  position: sticky;
  top: 30px;
}

.cart-summary h3 {
  color: #493838;
  font-size: 24px;
  margin-bottom: 25px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  color: #796969;
  margin-bottom: 15px;
}

.summary-line {
  height: 1px;
  background-color: #eee0dc;
  margin: 20px 0;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #493838;
  font-size: 20px;
  margin-bottom: 25px;
}

.summary-total strong {
  color: #9a5d6a;
}

.checkout-btn {
  width: 100%;
  border: none;
  background-color: #8f5965;
  color: white;
  padding: 14px;
  border-radius: 3px;
  transition: 0.3s;
  margin-bottom: 15px;
}

.checkout-btn:hover {
  background-color: #6f424d;
}

.continue-shopping {
  display: block;
  text-align: center;
  color: #8f5965;
  text-decoration: none;
  font-size: 14px;
}

.continue-shopping:hover {
  color: #6f424d;
}

/* Responsive */

@media (max-width: 768px) {
  .cart-header {
    padding: 60px 0 40px;
  }

  .page-title {
    font-size: 40px;
  }

  .cart-item {
    align-items: flex-start;
  }

  .cart-image {
    width: 90px;
    height: 100px;
  }

  .item-price {
    display: none;
  }

  .cart-summary {
    position: static;
  }
}
</style>
