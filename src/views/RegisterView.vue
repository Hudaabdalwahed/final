<template>
  <main class="auth-page">
    <section class="register-visual">
      <div>
        <p>GROW SOMETHING BEAUTIFUL</p>
        <h1>A little more <span>joy</span> every day.</h1>
      </div>
    </section>
    <section class="auth-card">
      <p class="eyebrow">JOIN FLOWER</p>
      <h1>Create your <span>account</span></h1>
      <p class="intro">
        Keep your orders, favorites and details together in one place.
      </p>
      <form @submit.prevent="register">
        <label>Full name</label
        ><input
          v-model.trim="name"
          type="text"
          required
          placeholder="Your name"
        />
        <label>Email</label
        ><input
          v-model.trim="email"
          type="email"
          required
          placeholder="you@example.com"
        />
        <label>Password</label
        ><input
          v-model="password"
          type="password"
          minlength="6"
          required
          placeholder="At least 6 characters"
        />
        <p v-if="error" class="form-error">{{ error }}</p>
        <button class="primary-btn" type="submit">
          Create Account <i class="bi bi-arrow-right"></i>
        </button>
      </form>
      <p class="switch">
        Already have an account? <router-link to="/login">Sign in</router-link>
      </p>
    </section>
  </main>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
const name = ref("");
const email = ref("");
const password = ref("");
const error = ref("");
const router = useRouter();
const auth = useAuthStore();
function register() {
  error.value = "";
  try {
    auth.register(name.value, email.value, password.value);
    router.push("/");
  } catch (err) {
    error.value =
      err instanceof Error ? err.message : "Unable to create account.";
  }
}
</script>
<style scoped>
.auth-page {
  min-height: calc(100vh - 90px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #fff8f5;
}
.register-visual {
  min-height: 650px;
  background: linear-gradient(
      180deg,
      rgba(65, 45, 50, 0.04),
      rgba(65, 45, 50, 0.45)
    ),
    url("@/assets/images/16.jpg") center/cover;
  display: flex;
  align-items: flex-end;
  padding: 60px;
  color: white;
}
.register-visual p {
  letter-spacing: 4px;
  font-size: 12px;
}
.register-visual h1 {
  font-size: 48px;
  font-weight: 400;
  max-width: 430px;
}
.register-visual span {
  color: #f5c9cf;
}
.auth-card {
  align-self: center;
  max-width: 520px;
  width: calc(100% - 70px);
  margin: 60px auto;
  padding: 54px;
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid #ead8d4;
  box-shadow: 0 25px 70px rgba(91, 58, 66, 0.12);
  border-radius: 28px;
}
.eyebrow {
  color: #a96776;
  letter-spacing: 4px;
  font-size: 12px;
  font-weight: 700;
}
.auth-card h1 {
  color: #493838;
  font-size: 42px;
  font-weight: 500;
  margin: 14px 0;
}
.auth-card h1 span {
  color: #a96776;
}
.intro {
  color: #796969;
  line-height: 1.8;
  margin-bottom: 30px;
}
label {
  display: block;
  color: #604b4f;
  font-size: 13px;
  margin: 16px 0 7px;
}
input {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #e2ceca;
  border-radius: 12px;
  outline: none;
  background: #fffaf8;
}
input:focus {
  border-color: #a96776;
  box-shadow: 0 0 0 4px rgba(169, 103, 118, 0.1);
}
.primary-btn {
  width: 100%;
  margin-top: 22px;
  border: 0;
  border-radius: 14px;
  padding: 14px;
  background: linear-gradient(135deg, #7d4e5a, #b87988);
  color: #fff;
  font-weight: 600;
}
.primary-btn i {
  margin-left: 8px;
}
.switch {
  text-align: center;
  margin-top: 22px;
  color: #796969;
  font-size: 14px;
}
.switch a {
  color: #8f5965;
  font-weight: 600;
  text-decoration: none;
}
.form-error {
  color: #a74358;
  font-size: 13px;
  margin-top: 12px;
}
@media (max-width: 800px) {
  .auth-page {
    grid-template-columns: 1fr;
  }
  .register-visual {
    display: none;
  }
  .auth-card {
    width: calc(100% - 30px);
    padding: 32px;
    margin: 30px auto;
  }
  .auth-card h1 {
    font-size: 34px;
  }
}
</style>
