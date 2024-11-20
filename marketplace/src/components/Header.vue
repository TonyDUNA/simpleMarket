<template>
  <header>
    <h1>Название магазина</h1>
    <nav>
      <router-link to="/">Главная</router-link>
      <router-link to="/cart">Корзина</router-link>
    </nav>
  </header>
</template>


<script>
export default {
  name: "Header"
};
</script>
