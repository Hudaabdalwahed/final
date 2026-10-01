<template>
  <main class="confirmation-page">
    <div class="confirmation-card">
      <div class="success-icon">
        <i class="bi bi-check-lg"></i>
      </div>

      <p class="small-title">ORDER CONFIRMED</p>

      <h1>Thank You for Your Order!</h1>

      <p class="message">
        Your order has been placed successfully. We will contact you soon to
        confirm the delivery details.
      </p>

      <div class="order-info">
        <div>
          <i class="bi bi-flower1"></i>
          <span>Fresh flowers</span>
        </div>

        <div>
          <i class="bi bi-truck"></i>
          <span>Fast delivery</span>
        </div>

        <div>
          <i class="bi bi-heart"></i>
          <span>Made with love</span>
        </div>
      </div>

      <router-link to="/products" class="continue-btn">
        Continue Shopping
        <i class="bi bi-arrow-right"></i>
      </router-link>

      <router-link to="/" class="home-link"> Back to Home </router-link>
    </div>
  </main>
</template>

<style scoped>
.confirmation-page {
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 70px 20px;
  background: #fffaf8;
}

.confirmation-card {
  width: 100%;
  max-width: 650px;
  padding: 60px 40px;
  text-align: center;
  background: #ffffff;
  border: 1px solid #f0dfdb;
  border-radius: 4px;
  box-shadow: 0 15px 45px rgba(100, 70, 70, 0.08);
}

.success-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #f5e5e2;
  color: #8f5965;
  font-size: 30px;
}

.small-title {
  margin-bottom: 12px;
  color: #a17a80;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 3px;
}

h1 {
  margin-bottom: 18px;
  color: #493838;
  font-size: 34px;
  font-weight: 500;
}

.message {
  max-width: 500px;
  margin: 0 auto 35px;
  color: #8b7373;
  font-size: 15px;
  line-height: 1.8;
}

.order-info {
  display: flex;
  justify-content: center;
  gap: 35px;
  margin-bottom: 35px;
}

.order-info div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #8b7373;
  font-size: 12px;
}

.order-info i {
  color: #9a5d6a;
  font-size: 20px;
}

.continue-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 13px 28px;
  background: #8f5965;
  color: white;
  text-decoration: none;
  font-size: 14px;
  transition: 0.3s ease;
}

.continue-btn:hover {
  background: #754b55;
  color: white;
  transform: translateY(-2px);
}

.home-link {
  display: block;
  margin-top: 18px;
  color: #8f5965;
  font-size: 13px;
  text-decoration: none;
}

.home-link:hover {
  color: #754b55;
}

@media (max-width: 576px) {
  .confirmation-card {
    padding: 45px 20px;
  }

  h1 {
    font-size: 27px;
  }

  .order-info {
    gap: 15px;
  }
}
</style>
