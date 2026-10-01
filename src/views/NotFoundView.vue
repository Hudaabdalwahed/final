<template>
  <main class="not-found">
    <div class="container text-center">
      <p class="label">FLOWER SHOP</p>
      <h1>404</h1>
      <p>Sorry, we couldn't find this page.</p>
      <router-link to="/" class="btn-back">Back Home</router-link>
    </div>
  </main>
</template>

<style scoped>
.not-found {
  min-height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fffaf8;
}
.label {
  color: #a96776;
  letter-spacing: 4px;
  font-size: 12px;
}
h1 {
  color: #493838;
  font-size: 100px;
  font-weight: 500;
  margin: 10px 0;
}
p {
  color: #796969;
}
.btn-back {
  display: inline-block;
  margin-top: 15px;
  padding: 12px 24px;
  background: #8f5965;
  color: white;
  text-decoration: none;
}
</style>
