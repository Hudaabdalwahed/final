<template>
  <main class="contact-page">
    <section class="contact-hero">
      <div class="container">
        <p>LET'S TALK FLOWERS</p>
        <h1>Make someone's day<br /><span>beautiful.</span></h1>
      </div>
    </section>
    <section class="container contact-wrap">
      <div class="contact-photo"></div>
      <div class="contact-card">
        <p class="eyebrow">CONTACT US</p>
        <h2>Tell us what you're planning.</h2>
        <p class="copy">
          Need a bouquet for a birthday, a wedding or simply because? We'd love
          to help.
        </p>
        <form @submit.prevent="send">
          <input
            v-model.trim="form.name"
            required
            placeholder="Your name"
          /><input
            v-model.trim="form.email"
            type="email"
            required
            placeholder="Email address"
          /><select v-model="form.topic">
            <option>Custom bouquet</option>
            <option>Wedding flowers</option>
            <option>Delivery question</option>
            <option>Other</option></select
          ><textarea
            v-model.trim="form.message"
            required
            rows="5"
            placeholder="How can we help?"
          ></textarea
          ><button class="send-btn" type="submit">
            Send Message <i class="bi bi-send"></i>
          </button>
          <p v-if="sent" class="sent">
            <i class="bi bi-check-circle"></i> Thanks! We'll get back to you
            soon.
          </p>
        </form>
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
const sent = ref(false);
const form = reactive({
  name: "",
  email: "",
  topic: "Custom bouquet",
  message: "",
});
function send() {
  sent.value = true;
  form.message = "";
}
</script>
<style scoped>
.contact-page {
  background: #fffaf8;
  min-height: 80vh;
}
.contact-hero {
  padding: 85px 0 110px;
  background: linear-gradient(
      120deg,
      rgba(88, 54, 63, 0.72),
      rgba(88, 54, 63, 0.15)
    ),
    url("@/assets/images/18.jpg") center/cover;
  color: white;
}
.contact-hero p {
  letter-spacing: 5px;
  font-size: 11px;
}
.contact-hero h1 {
  font-size: 56px;
  font-weight: 400;
  line-height: 1.12;
}
.contact-hero span {
  color: #f0c6cd;
}
.contact-wrap {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 0;
  margin-top: -55px;
  padding-bottom: 80px;
  position: relative;
}
.contact-photo {
  min-height: 620px;
  border-radius: 25px 0 0 25px;
  background: url("@/assets/images/9.jpg") center/cover;
  box-shadow: 0 25px 55px rgba(70, 45, 52, 0.16);
}
.contact-card {
  background: #fff;
  border-radius: 0 25px 25px 0;
  padding: 48px;
  box-shadow: 0 25px 55px rgba(70, 45, 52, 0.12);
  border: 1px solid #eadbd7;
}
.eyebrow {
  color: #a96776;
  letter-spacing: 4px;
  font-size: 11px;
  font-weight: 700;
}
.contact-card h2 {
  color: #493838;
  font-size: 34px;
  font-weight: 400;
}
.copy {
  color: #796969;
  line-height: 1.8;
}
.contact-card form {
  display: grid;
  gap: 13px;
  margin-top: 25px;
}
.contact-card input,
.contact-card select,
.contact-card textarea {
  width: 100%;
  border: 1px solid #e2d1cd;
  border-radius: 12px;
  padding: 13px 15px;
  outline: none;
  background: #fffaf8;
}
.contact-card textarea {
  resize: vertical;
}
.contact-card input:focus,
.contact-card select:focus,
.contact-card textarea:focus {
  border-color: #a96776;
  box-shadow: 0 0 0 4px rgba(169, 103, 118, 0.08);
}
.send-btn {
  border: 0;
  border-radius: 13px;
  padding: 14px;
  background: #8f5965;
  color: #fff;
  font-weight: 600;
}
.sent {
  color: #5f7d60;
  font-size: 13px;
  margin: 5px 0;
}
.send-btn i {
  margin-left: 7px;
}
@media (max-width: 800px) {
  .contact-wrap {
    grid-template-columns: 1fr;
    margin-top: -35px;
    padding: 0 15px 60px;
  }
  .contact-photo {
    min-height: 320px;
    border-radius: 22px 22px 0 0;
  }
  .contact-card {
    border-radius: 0 0 22px 22px;
    padding: 30px;
  }
  .contact-hero h1 {
    font-size: 42px;
  }
}
</style>
