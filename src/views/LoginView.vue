<template>
  <main class="auth-page">
    <div class="auth-image"></div>
    <section class="auth-card">
      <p class="eyebrow">WELCOME BACK</p>
      <h1>Come back to <span>FLOWER</span></h1>
      <p class="intro">
        Sign in to save your favorites and follow every order.
      </p>

      <form @submit.prevent="login">
        <label>Email</label>
        <input
          v-model.trim="email"
          type="email"
          placeholder="you@example.com"
          required
        />
        <label>Password</label>
        <input
          v-model="password"
          type="password"
          placeholder="••••••••"
          required
        />
        <p v-if="error" class="form-error">{{ error }}</p>
        <button class="primary-btn" type="submit">
          Sign In <i class="bi bi-arrow-right"></i>
        </button>
      </form>

      <p class="switch">
        New here? <router-link to="/register">Create an account</router-link>
      </p>
      <div class="demo-note">
        <i class="bi bi-stars"></i> Admin demo: admin@flower.com / admin123
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const email = ref("");
const password = ref("");
const error = ref("");
const router = useRouter();
const route = useRoute();
const auth = useAuthStore();

function login() {
  error.value = "";
  try {
    auth.login(email.value, password.value);
    router.push((route.query.redirect as string) || "/");
  } catch (err) {
    error.value = err instanceof Error ? err.message : "Unable to sign in.";
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
.auth-image {
  min-height: 650px;
  background: linear-gradient(
      90deg,
      rgba(79, 45, 55, 0.08),
      rgba(79, 45, 55, 0.02)
    ),
    url("@/assets/images/12.jpg") center/cover;
}
.auth-card {
  align-self: center;
  max-width: 520px;
  width: calc(100% - 70px);
  margin: 60px auto;
  padding: 54px;
  background: rgba(255, 255, 255, 0.82);
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
h1 {
  color: #493838;
  font-size: 42px;
  font-weight: 500;
  margin: 14px 0;
}
h1 span {
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
.demo-note {
  margin-top: 25px;
  padding: 12px 14px;
  background: #f8efdf;
  color: #806b48;
  border-radius: 12px;
  font-size: 12px;
}
@media (max-width: 800px) {
  .auth-page {
    grid-template-columns: 1fr;
  }
  .auth-image {
    display: none;
  }
  .auth-card {
    width: calc(100% - 30px);
    padding: 32px;
    margin: 30px auto;
  }
  h1 {
    font-size: 34px;
  }
}
</style>
