<template>
  <section class="hero-section">
    <img
      src="@/assets/images/hero-flower.png"
      alt="Beautiful flowers"
      class="hero-image"
    />

    <div class="hero-overlay"></div>

    <div class="container hero-content">
      <div class="hero-text">
        <p class="hero-small-title">Fresh Flowers</p>

        <h1>
          Flowers that
          <span>make you smile</span>
        </h1>

        <p class="hero-description">
          Beautiful flowers carefully selected to make every moment special.
        </p>

        <router-link to="/products" class="hero-btn">
          Shop Now
          <i class="bi bi-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  height: calc(100vh - 80px);
  min-height: 600px;
  overflow: hidden;
}

.hero-image {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;

  background: linear-gradient(
    90deg,
    rgba(255, 250, 248, 0.9) 0%,
    rgba(255, 250, 248, 0.65) 38%,
    rgba(255, 250, 248, 0.15) 75%,
    rgba(255, 250, 248, 0.05) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 2;

  height: 100%;

  display: flex;
  align-items: center;
}

.hero-text {
  max-width: 520px;
}

.hero-small-title {
  margin-bottom: 15px;

  color: #8f5965;

  font-size: 12px;
  font-weight: 600;

  letter-spacing: 4px;
  text-transform: uppercase;
}

.hero-text h1 {
  margin-bottom: 22px;

  color: #493838;

  font-size: 58px;
  font-weight: 500;

  line-height: 1.1;
}

.hero-text h1 span {
  display: block;
  color: #a56f7b;
}

.hero-description {
  max-width: 430px;

  margin-bottom: 30px;

  color: #725f5f;

  font-size: 15px;
  line-height: 1.8;
}

.hero-btn {
  display: inline-flex;

  align-items: center;
  gap: 12px;

  padding: 13px 25px;

  background: #8f5965;
  color: white;

  text-decoration: none;

  font-size: 14px;

  transition: 0.3s ease;
}

.hero-btn:hover {
  background: #754b55;
  color: white;

  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero-section {
    height: 700px;
  }

  .hero-overlay {
    background: rgba(255, 250, 248, 0.7);
  }

  .hero-text {
    text-align: center;
    margin: auto;
  }

  .hero-text h1 {
    font-size: 42px;
  }

  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
