<template>
  <main class="about-page">
    <!-- Hero -->
    <section class="about-hero">
      <div class="container">
        <div class="about-hero-content">
          <p class="small-title">ABOUT FLOWER</p>

          <h1>
            Flowers made
            <span>with love</span>
          </h1>

          <p>
            We believe that every flower has a story, and every bouquet can make
            a special moment even more beautiful.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="story-section">
      <div class="container">
        <div class="row align-items-center g-5">
          <!-- Images -->
          <div class="col-lg-6">
            <div class="image-grid">
              <img
                src="@/assets/images/1.jpg"
                alt="Beautiful flowers"
                class="story-image image-one"
              />

              <img
                src="@/assets/images/2.jpg"
                alt="Flower bouquet"
                class="story-image image-two"
              />
            </div>
          </div>

          <!-- Text -->
          <div class="col-lg-6">
            <div class="story-content">
              <p class="section-label">OUR STORY</p>

              <h2>
                More than flowers,
                <span>it's a feeling.</span>
              </h2>

              <p>
                At Flower, we believe flowers have the power to express feelings
                that words sometimes cannot.
              </p>

              <p>
                From simple moments to unforgettable occasions, we carefully
                choose every flower and create beautiful bouquets with attention
                to every detail.
              </p>

              <router-link to="/products" class="about-btn">
                Discover Our Flowers
                <i class="bi bi-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="features-section">
      <div class="container">
        <div class="section-heading">
          <p class="section-label">WHY FLOWER</p>

          <h2>
            Made for
            <span>special moments</span>
          </h2>
        </div>

        <div class="row g-4">
          <div class="col-md-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="bi bi-flower1"></i>
              </div>

              <h3>Fresh Flowers</h3>

              <p>Carefully selected flowers to keep every bouquet fresh.</p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="bi bi-heart"></i>
              </div>

              <h3>Made With Love</h3>

              <p>Every bouquet is prepared with care and attention.</p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="bi bi-truck"></i>
              </div>

              <h3>Fast Delivery</h3>

              <p>Beautiful flowers delivered carefully to your door.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quote -->
    <section class="quote-section">
      <div class="container">
        <div class="quote-box">
          <i class="bi bi-quote"></i>

          <h2>"Flowers are the little things that make life beautiful."</h2>

          <p>— Flower Shop</p>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
/* =========================
   PAGE
========================= */

.about-page {
  background: #fffaf8;
  color: #493838;
}

/* =========================
   HERO
========================= */

.about-hero {
  min-height: 430px;

  display: flex;
  align-items: center;

  background: linear-gradient(135deg, #f4e4e2, #ead4d3);

  text-align: center;
}

.about-hero-content {
  max-width: 700px;
  margin: auto;
}

.small-title,
.section-label {
  margin-bottom: 15px;

  color: #9a5d6a;

  font-size: 11px;
  font-weight: 600;

  letter-spacing: 4px;
}

.about-hero h1 {
  margin-bottom: 20px;

  color: #493838;

  font-size: 58px;
  font-weight: 500;

  line-height: 1.1;
}

.about-hero h1 span {
  color: #9a5d6a;
}

.about-hero p:last-child {
  max-width: 580px;

  margin: auto;

  color: #725f5f;

  font-size: 15px;
  line-height: 1.9;
}

/* =========================
   STORY
========================= */

.story-section {
  padding: 100px 0;
}

.image-grid {
  position: relative;

  height: 520px;
}

.story-image {
  position: absolute;

  object-fit: cover;

  border-radius: 3px;

  box-shadow: 0 15px 35px rgba(90, 60, 60, 0.12);
}

.image-one {
  width: 68%;
  height: 420px;

  top: 0;
  left: 0;
}

.image-two {
  width: 58%;
  height: 350px;

  right: 0;
  bottom: 0;

  border: 10px solid #fffaf8;
}

.story-content {
  padding-left: 35px;
}

.story-content h2,
.section-heading h2 {
  margin-bottom: 25px;

  color: #493838;

  font-size: 42px;
  font-weight: 500;

  line-height: 1.2;
}

.story-content h2 span,
.section-heading h2 span {
  display: block;

  color: #9a5d6a;
}

.story-content p:not(.section-label) {
  margin-bottom: 18px;

  color: #725f5f;

  font-size: 15px;
  line-height: 1.9;
}

.about-btn {
  display: inline-flex;

  align-items: center;
  gap: 10px;

  margin-top: 15px;

  padding: 13px 24px;

  background: #8f5965;
  color: white;

  text-decoration: none;

  font-size: 13px;

  transition: 0.3s ease;
}

.about-btn:hover {
  background: #754b55;
  color: white;

  transform: translateY(-2px);
}

/* =========================
   FEATURES
========================= */

.features-section {
  padding: 90px 0;

  background: #f8eeec;
}

.section-heading {
  text-align: center;

  margin-bottom: 50px;
}

.section-heading h2 {
  font-size: 40px;
}

.feature-card {
  height: 100%;

  padding: 40px 30px;

  text-align: center;

  background: rgba(255, 255, 255, 0.75);

  border: 1px solid #ead9d5;

  transition: 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-6px);

  box-shadow: 0 15px 30px rgba(90, 60, 60, 0.1);
}

.feature-icon {
  width: 58px;
  height: 58px;

  margin: 0 auto 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #ead4d3;

  color: #8f5965;

  font-size: 24px;
}

.feature-card h3 {
  margin-bottom: 12px;

  color: #493838;

  font-size: 18px;
  font-weight: 500;
}

.feature-card p {
  margin: 0;

  color: #806c6c;

  font-size: 14px;

  line-height: 1.8;
}

/* =========================
   QUOTE
========================= */

.quote-section {
  padding: 100px 0;
}

.quote-box {
  max-width: 800px;

  margin: auto;

  text-align: center;
}

.quote-box > i {
  color: #c18a96;

  font-size: 40px;
}

.quote-box h2 {
  margin: 20px 0;

  color: #65434b;

  font-size: 30px;
  font-weight: 400;

  line-height: 1.5;
}

.quote-box p {
  color: #9a5d6a;

  font-size: 13px;

  letter-spacing: 2px;
}

/* =========================
   MOBILE
========================= */

@media (max-width: 991px) {
  .about-hero h1 {
    font-size: 46px;
  }

  .story-content {
    padding-left: 0;
  }

  .image-grid {
    height: 450px;
  }
}

@media (max-width: 576px) {
  .about-hero {
    min-height: 380px;
    padding: 60px 20px;
  }

  .about-hero h1 {
    font-size: 38px;
  }

  .story-section,
  .features-section,
  .quote-section {
    padding: 65px 0;
  }

  .image-grid {
    height: 390px;
  }

  .image-one {
    height: 320px;
  }

  .image-two {
    height: 270px;
  }
  .story-content h2,
  .section-heading h2 {
    font-size: 32px;
  }

  .quote-box h2 {
    font-size: 24px;
  }
}
</style>
