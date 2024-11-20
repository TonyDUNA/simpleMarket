<template>
  <main>


    <div class="container">
      <div class="row">
        <div class="product-page">
          <nav class="breadcrumbs">
            <router-link to="/">Главная</router-link> &#183;
            <span>Случайный товар</span> &#183;
            <span>{{ product.description }}</span>

          </nav>
          <div class="row">
            <div class="col-lg-5">
              <div class="card">
                <router-link :to="`/product/${product.id}`">
                  <img :src="product.image" :alt="product.description" class="product-image" />
                </router-link>
              </div>
            </div>
            <div class="col-lg-7 col-md-12 col-sm-12">
              <div class="product-info ">
                <div class="product-desc">{{ product.description }}</div>
                <div class="availability">{{ product.availability }}</div>
                <div class="color-choice">
                  <span v-for="color in colors" :key="color.id" class="color-option">
                    <img :src="color.image" :alt="'Цвет ' + color.id" :class="{ active: selectedColor === color.id }"
                      @click="selectColor(color.id)" />
                  </span>
                </div>
                <div class="author">
                  <img src="@/assets/img/User.svg" alt="">
                  {{ product.author }}
                </div>
                <div class="buying">
                  <div class="price">{{ product.price }} &#8376;</div>
                  <button class="to-card-button" @click="addToCart">Добавить в
                    корзину </button>
                  <!-- <button @click="toggleFavorite(product)" :class="{ favorite: isFavorite(product.id) }">
                  {{ isFavorite(product.id) ? "Убрать из избранного" : "Добавить в избранное" }}
                </button> -->
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
  props: ['id'],
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
          image: "/table.png",
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
      colors: [
        {
          id: 1,
          image: "/Component1.png",
        },

        {
          id: 3,
          image: "/Component3.png",
        },
        {
          id: 4,
          image: "/Component4.png",
        },
      ],
      selectedColor: null,
    };
  },

  computed: {
    product() {
      return this.products.find((item) => item.id === parseInt(this.id));
    },

    isFavorite() {
      const cartStore = useCartStore();
      return (productId) => cartStore.isFavorite(productId);
    },

  },


  methods: {
    selectColor(colorId) {
      this.selectedColor = colorId;
    },
    addToCart() {
      if (!this.selectedColor) {
        alert("Выберите цвет перед добавлением товрара в корзину.");
        return;
      }

      const cartStore = useCartStore();
      const selectedColorObject = this.colors.find(
        color => color.id === this.selectedColor
      );
      cartStore.addItem({
        ...this.product,
        color: selectedColorObject,
      });

      alert("Товар добавлен в корзину!");
    },

    toggleFavorite() {
      const cartStore = useCartStore();
      cartStore.toggleFavorite(this.product);
    },
  },
};
</script>

<style>
.own2 {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

}

.breadcrumbs {
  margin-bottom: 20px;
  font-size: 16px;
  color: #676767;
  line-height: 19.5px;
  font-family: "Montserrat", sans-serif;
  margin-top: 48px;
  margin-bottom: 24px;
  max-height: 20px;
  justify-content: left;
}

.product-page {
  width: 100%;
  height: auto;
  flex-wrap: wrap;

}

.product-page .card {
  max-width: 546px;
  border: none;
  display: flex;
}

.product-image {
  width: 413px;
  height: 416px;

  @media (max-width: 530px) {
    width: 240px;
    height: 240px;
  }

  @media (max-width: 756px) {
    width: 340px;
    height: 340px;
  }
}

.product-info {
  max-width: 702px;
  /* max-height: 308px; */
  position: relative;


}

.product-desc {
  color: #232323;
  font-size: 32px;
  line-height: 39.5px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  margin-top: 10px;
}


.product-info .availability {
  color: #676767;
  font-size: 16px;
  line-height: 19.5px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;

}

.product-info .author {
  color: #676767;
  font-size: 16px;
  line-height: 19.5px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  margin: 24px 0;
}

.product-info .buying {
  /* position: absolute; */
  max-width: 320px;
  margin-bottom: 20px;
  /* max-height: 103px; */
  /* left: 0px;
  bottom: 0px; */
}

.product-info .price {
  color: #232323;
  font-size: 24px;
  line-height: 29.26px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  margin-bottom: 8px;
}


.product-info .to-card-button {
  width: 319px;
  height: 56px;
  border-radius: 8px;
  /* position: absolute; */
  left: 0px;
  background: #dc2840;
  color: #FAFAFF;
  font-size: 20px;
  line-height: 24.38px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  padding: 16px;
  border: none;
  transition: background-color 0.5s ease, color 0.5s ease;

}


.to-card-button:hover {
  background: #dc2840;
  color: #FAFAFF;
}

.color-choice {
  display: flex;
  gap: 10px;
  margin: 10px 0;
}

.color-option img {
  width: 50px;
  height: 50px;
  border: 2px solid transparent;
  border-radius: 50%;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.color-option img.active {
  border-color: #dc2840;
}
</style>