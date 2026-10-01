<template>
  <section class="about-section py-5">
    <div class="container py-lg-5">
      <div class="row justify-content-center text-center">
        <div class="col-lg-8 col-md-10">
          <p class="about-label mb-3">OUR STORY</p>

          <h2 class="about-title mb-4">
            Flowers made with
            <span>love & care</span>
          </h2>

          <p class="about-text mx-auto mb-4">
            At Flower Shop, we believe that every flower has a story to tell. We
            carefully choose fresh and beautiful flowers to create bouquets that
            make every moment special.
          </p>

          <router-link
            to="/about"
            class="about-btn d-inline-flex align-items-center gap-2"
          >
            Discover More
            <i class="bi bi-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background-color: #fff;
}

.about-label {
  color: #a96776;
  font-size: 14px;
  letter-spacing: 4px;
  font-weight: 500;
}

.about-title {
  color: #493838;
  font-size: 46px;
  font-weight: 500;
  line-height: 1.2;
}

.about-title span {
  color: #a96776;
}

.about-text {
  max-width: 680px;

  color: #796969;
  font-size: 17px;
  line-height: 1.9;
}

.about-btn {
  color: #8f5965;
  border: 1px solid #8f5965;

  padding: 12px 25px;

  text-decoration: none;
  border-radius: 3px;

  transition: all 0.3s ease;
}

.about-btn:hover {
  background-color: #8f5965;
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .about-title {
    font-size: 36px;
  }

  .about-text {
    font-size: 16px;
  }
}
</style>
