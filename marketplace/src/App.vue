<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="top-header">
      <div class="container  own2">
        <div class="row own">
          <div class="col-lg-3 col-sm-6">
            <div class="logo-dari d-flex align-items-center">
              <a href="#"><img src="@/assets/img/heart.png" alt=""></a>
              <div class="cont-desc">ДариДобро</div>

              <div class="line1">
                <img src="@/assets/img//Line1.png" alt="">
              </div>
              <div class="logo-bee">
                <img src="@/assets/img//Logo.svg" alt="">
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-12">
            <div class="top-menu d-none d-md-block">
              <ul>
                <li class="product-name"><a href="/">Продукция</a></li>
                <li class="partner no-break"><a href="#">Стать партнером</a></li>
                <li class="about no-break"><a href="#">О проекте</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3  d-none d-md-block">
            <div class="search">
              <img src="@/assets/img/Search.png" alt="">
              <input type="text" placeholder="Поиск по сайту...">
              <img src="@/assets/img/User.png" alt="">
              <img src="@/assets/img/ShoppingBag.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>


  <RouterView />
  <footer>
    <div class="container own2">
      <div class="row">
        <div class="col-lg-3 col-md-6, col-sm-12">
          <div class="logo-dari d-flex align-items-center">
            <a href="#"><img src="@/assets/img/heart.png" alt=""></a>
            <div class="cont-desc">ДариДобро</div>
          </div>
          <ul class="social-net">
            <li><a href="https://www.instagram.com/beeline_kz/"><img src="@/assets/img/1.png" alt=""></a></li>
            <li><a href="https://x.com/_Beeline_kz"><img src="@/assets/img/2.png" alt=""></a></li>
            <li><a href="https://www.facebook.com/Beeline.Kazakhstan"><img src="@/assets/img/3.png" alt=""></a></li>
            <li><a href="https://vk.com/beeline_kaz"><img src="@/assets/img/4.png" alt=""></a></li>
            <li><a href="https://www.youtube.com/user/BeelineKazakhstan"><img src="@/assets/img/5.png" alt=""></a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6, col-sm-12">
          <div class="footer-menu">
            <ul>
              <li class="partner no-break"><a href="#">Стать партнером</a></li>
              <li class="product-name"><a href="/">Продукция</a></li>
              <li class="about no-break"><a href="#">О проекте</a></li>
            </ul>
          </div>
        </div>

      </div>



    </div>

  </footer>
</template>

<style></style>
