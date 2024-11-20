<template>


  <main>

    <div class="container own2">

      <div class="row">
        <nav class="breadcrumbs">
          <span>Главная</span> &#183;
          <router-link to="/cart">Моя корзина</router-link> &#183;
        </nav>
        <div class="col-lg-12 col-md-12 col-sm-12">
          <div class="banner">
            <div class="banner-image d-none d-md-block">
              <img src="@/assets/img/Frame1.png" alt="">
            </div>
            <div class="layout">
              <div class="banner-text1">Маркетплейс <br>с душой</div>
              <div class="banner-text2">Плати людям, а не корпорациям</div>
              <button class="goods-button">К товарам</button>
              <button class="about-project-button">О проекте</button>
            </div>
            <!-- <RouterView></RouterView> -->
            <div class="art-heart">
              <img src="@/assets/img/Art.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container container-sm container-md own2">
      <h1>Лучшие товары недели</h1>
      <div class="row">
        <div class="card-goods">
          <div class="row">
            <div v-for="product in repeatedProducts" :key="product.id" class="col-auto">
              <div class="card">
                <router-link :to="`/product/${product.id}`">
                  <img :src="product.image" :alt="product.description" />
                </router-link>
                <div class="card-desc">{{ product.description }}</div>
                <div class="availability">{{ product.availability }}</div>
                <div class="price-author">
                  <div class="price">{{ product.price }} &#8376
                    <button @click="addProductToCart(product)" class="to-card-button">+</button>
                  </div>
                  <div class="author">
                    <img src="@/assets/img/User.svg" alt="">
                    {{ product.author }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>

</template>

<script>

import { useCartStore } from '@/stores/cartStore';

export default {
  data() {
    return {
      products: [
        {
          id: 1,
          image: "/Chair.png",
          description: "Минималистичный стул",
          availability: "В наличии",
          price: 27000,
          author: "GreenTal",
        },
        {
          id: 2,
          image: "/carpet.png",
          description: "Ковер в национальном стиле с орнаментом",
          availability: "Под заказ (1-2 недели)",
          price: 56990,
          author: "Руслан",
        },
        {
          id: 3,
          image: "/lighting.png",
          description: "Светильник из стали",
          availability: "В наличии",
          price: 9000,
          author: "Мадина И",
        },
        {
          id: 4,
          image: '/table.png',
          description: "Лофт комплект из стола и стула",
          availability: "Под заказ (2-4 недели)",
          price: 89990,
          author: 'СП "Медиалайн"',
        },
        {
          id: 5,
          image: "/hudi.png",
          description: 'Худи "barcode"',
          availability: "В наличии",
          price: 15000,
          author: "Ержан Г",
        },
      ],
    };
  },
  computed: {
    repeatedProducts() {
      return [...this.products, ...this.products, ...this.products, ...this.products];
    }
  },

  methods: {
    addProductToCart(product) {
      const cartStore = useCartStore();
      cartStore.addItem(product);
      console.log(cartStore.items);
      alert('Товар добавлен в корзину!');
    },
  },
};
</script>


<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}


body {
  font-family: "Montserrat", sans-serif;
}

.top-header {
  padding: 0 80px 0 80px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  height: 112px;
  padding-top: 30px;
}

.own {
  align-items: center;
}

.logo-dari {
  width: 167px;
  height: 44px;
}

.logo-dari .cont-desc {
  color: #232323;
  font-size: 20px;
  line-height: 24.38px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}

.line1 {
  margin-left: 18px;
  margin-right: 18px;
  border: 1px #ececec;
}

.logo-bee {
  padding-top: 8px;
}


main {
  padding: 20px;
  min-height: 100vh;
  align-items: center;
}

.top-menu {
  padding: 5px;
}


.top-menu ul {
  width: 378px;
  display: flex;
  height: 20px;
  gap: 10px 24px;
  margin: 0;
}

.top-menu ul li {
  list-style: none;
  width: 144px;
}

.top-menu ul li a {
  color: #676767;
  font-size: 16px;
  line-height: 19.5px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.5s ease, font-weight 0.5s ease;
}

.no-break a {
  white-space: nowrap;

}

.top-menu ul li a:hover {
  font-weight: 700;
  color: #232323;
}

.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 552px;
  margin-bottom: 40px;
  position: relative;
}

.banner .layout {
  position: absolute;
  width: 630px;
  height: 300px;
  top: 126px;
  bottom: 126;
  left: 0;
  bottom: 270px;
}

.banner-image {
  position: absolute;
  top: 1px;
  right: 0;
  width: 756px;
  height: 551px;
}

.banner-text1 {
  color: #010101;
  font-size: 64px;
  line-height: 78.02px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  position: absolute;
  width: 620px;
  height: 156;

}

.banner-text2 {
  color: #676767;
  font-size: 20px;
  line-height: 24.38px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  position: absolute;
  bottom: 104px;
}

.goods-button {
  width: 143px;
  height: 56px;
  padding: 16px;
  border-radius: 8px;
  position: absolute;
  bottom: 1px;
  font-size: 20px;
  font-weight: 700;
  background: #DC2840;
  color: #fafaff;
  border: #DC2840;
}

.about-project-button {
  width: 143px;
  height: 56px;
  padding: 16px;
  border-radius: 8px;
  position: absolute;
  left: 167px;
  bottom: 1px;
  font-size: 20px;
  font-weight: 500;
  background: transparent;
  color: #676767;
  border: transparent;
}

.banner .art-heart {
  position: absolute;
  right: 7px;
  top: 450px;
}

h1 {
  color: #232323;
  font-size: 32px;
  line-height: 39px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 20px;
}


.card-goods {
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

}

.own2 {
  max-width: 1280px;
  width: 100%;
  margin: auto;
  flex-wrap: wrap;


  @media (max-width: 530px) {
    display: flex;
    justify-content: center;
  }
}


.card {
  position: relative;
  width: 230px;
  height: 388px;
  border: none;
  margin-bottom: 20px;

}


.card .card-desc {
  font-size: 16px;
  line-height: 19.5px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}

.price-author {
  position: absolute;
  bottom: 1px;
}

.card .availability {
  color: #676767;
  font-size: 16px;
  line-height: 19.5px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;

}

.card .price {
  color: #232323;
  font-size: 24px;
  line-height: 29.26px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}

.card .author {
  color: #676767;
  font-size: 12px;
  line-height: 14.63px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
}

.to-card-button {
  width: 42px;
  height: 32px;
  border-radius: 8px;
  position: absolute;
  background: #ececec;
  color: #232323;
  border: none;
  left: 188px;
  transition: background-color 0.5s ease, color 0.5s ease;
}

.to-card-button:hover {
  background: #dc2840;
  color: #FAFAFF;
}



.social-net {
  display: flex;
}

.social-net li {
  list-style: none;
  padding: 5px;

}

footer {
  padding: 24px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  height: 176px;
  padding-top: 34px;
}



.footer-menu ul {
  width: 378px;
  height: 20px;
  gap: 10px 24px;
  margin: 0;
}

.footer-menu ul li {
  list-style: none;
  width: 144px;
}

.footer-menu ul li a {
  color: #676767;
  font-size: 16px;
  line-height: 19.5px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.5s ease, font-weight 0.5s ease;
}

.footer-menu ul li a:hover {
  font-weight: 700;
  color: #232323;
}
</style>