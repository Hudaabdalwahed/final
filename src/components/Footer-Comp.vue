<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-main">
        <div class="brand-block">
          <div class="brand">
            <span class="mark"><i class="bi bi-flower1"></i></span
            ><span>FLOWER</span>
          </div>
          <p>
            Thoughtful flowers, beautifully arranged and delivered with care.
          </p>
          <div class="socials">
            <a href="#" aria-label="Instagram"
              ><i class="bi bi-instagram"></i></a
            ><a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a
            ><a href="#" aria-label="Pinterest"
              ><i class="bi bi-pinterest"></i
            ></a>
          </div>
        </div>
        <div>
          <h6>Shop</h6>
          <router-link to="/products">All flowers</router-link
          ><router-link to="/wishlist">Wishlist</router-link
          ><router-link to="/orders">My orders</router-link>
        </div>
        <div>
          <h6>About</h6>
          <router-link to="/about">Our story</router-link
          ><router-link to="/contact">Contact</router-link
          ><router-link to="/profile">My account</router-link>
        </div>
        <div class="newsletter">
          <h6>Stay in bloom</h6>
          <p>Get seasonal inspiration and new arrivals.</p>
          <div class="email">
            <input placeholder="Your email" type="email" /><button
              aria-label="Subscribe"
            >
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Flower Shop</span
        ><span
          >Made with <i class="bi bi-heart-fill"></i> for beautiful
          moments</span
        >
      </div>
    </div>
  </footer>
</template>
<style scoped>
.footer {
  background: #35282c;
  color: #eadbd7;
  padding: 72px 0 25px;
}
.footer-main {
  display: grid;
  grid-template-columns: 1.6fr 0.8fr 0.8fr 1.3fr;
  gap: 45px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  letter-spacing: 4px;
  font-weight: 700;
}
.mark {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #9d6270;
  color: #fff;
}
.brand-block > p {
  max-width: 310px;
  color: #bdaeb0;
  line-height: 1.8;
  font-size: 13px;
  margin: 18px 0;
}
.socials {
  display: flex;
  gap: 9px;
}
.socials a {
  width: 34px;
  height: 34px;
  border: 1px solid #665257;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #e8d9d6;
  text-decoration: none;
}
.footer h6 {
  color: #fff;
  margin: 5px 0 18px;
  font-size: 13px;
  letter-spacing: 1px;
}
.footer-main > div:not(.brand-block):not(.newsletter) {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.footer a {
  color: #bdaeb0;
  text-decoration: none;
  font-size: 13px;
}
.footer a:hover {
  color: #fff;
}
.newsletter p {
  font-size: 13px;
  color: #bdaeb0;
  line-height: 1.7;
}
.email {
  display: flex;
  background: #49383d;
  border: 1px solid #635055;
  border-radius: 12px;
  padding: 4px;
}
.email input {
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: #fff;
  padding: 9px;
}
.email button {
  width: 38px;
  border: 0;
  border-radius: 9px;
  background: #9d6270;
  color: #fff;
}
.footer-bottom {
  border-top: 1px solid #514146;
  margin-top: 55px;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  color: #9f9092;
  font-size: 11px;
}
.footer-bottom i {
  color: #c98794;
}
@media (max-width: 800px) {
  .footer-main {
    grid-template-columns: 1fr 1fr;
  }
  .newsletter {
    grid-column: 1/-1;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 8px;
  }
}
@media (max-width: 480px) {
  .footer-main {
    grid-template-columns: 1fr;
  }
  .newsletter {
    grid-column: auto;
  }
}
</style>
