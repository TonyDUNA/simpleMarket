<template>
  <div class="container  own2">
    <div class="row">
      <div class="cart-page">
        <h1>Моя корзина</h1>
        <nav class="breadcrumbs">
          <router-link to="/">Главная</router-link> &#183;
          <span>Моя корзина</span> &#183;
        </nav>
        <div class="row">
          <div class="col-lg-9 col-md-8 col-sm-12">
            <div class="cart-list">
              <div v-if="cartStore.items.length > 0">
                <div class="select-all"><input type="checkbox" :checked="allSelected" @change="toggleSelectAll" />
                  <label for="select-all">Выбрать все</label>
                  <button @click="removeSelectedItems">Удалить</button>
                </div>
                <div v-for="item in cartStore.items" :key="item.id" class="cart-item d-flex flex-column flex-sm-row">
                  <span><input type="checkbox" v-model="item.selected" @change="updateSelection" /></span>
                  <span><img :src="item.image" :alt="item.description" /></span>
                  <div class="item-details  flex-sm-column">
                    <div class="item-name text-sm-wrap">{{ item.description }}</div>
                    <div class="item-color">
                      <span></span>
                      <img v-if='item.color' :src="item.color.image" alt="Выбранный цвет" />
                      <span v-else>Цвет не выбран</span>
                    </div>
                  </div>
                  <div class="item-details2">
                    <div class="item-price">{{ item.price }} &#8376</div>
                    <button class="basket" @click="removeItem(item.id, item.color?.id)"><img src="/basket.png"
                        alt=""></button>
                    <div class="item-quantity d-flex flex-nowrap">
                      <button @click="decrementQuantity(item)"><img src="/minus.svg" alt=""></button>
                      <button>{{ item.quantity }}</button>
                      <button @click="incrementQuantity(item)"><img src="/plus.svg" alt=""></button>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>
                <p>Корзина пуста</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <div class="order-detail">
              <h2>Детали заказа</h2>
              <div class="total-price d-flex justify-content-between">
                <span class="label">Покупки:</span>
                <span class="value">{{ cartStore.totalPrice }} &#8376</span>
              </div>
              <div class="delivery">
                <span class="label">Доставка:</span>
                <span class="value">1500 &#8376</span>
              </div>
              <div class="total"> Всего {{ cartStore.totalPrice + 1500 }} &#8376</div>
              <button class="to-order-button w-100 mt-3">Оформить заказ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import { useCartStore } from '@/stores/cartStore';


export default {
  data() {
    return {
      cartStore: useCartStore(), // Подключаем хранилище
    };
  },
  computed: {
    totalPrice() {
      return this.cartStore.totalPrice; // Вычисляемая стоимость
    },
    allSelected() {
      return this.cartStore.items.every((item) => item.selected);
    },
  },
  methods: {
    incrementQuantity(item) {
      this.cartStore.addItem({ ...item, color: item.color });
    },
    decrementQuantity(item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        this.cartStore.removeItem(item.id);
      }
      localStorage.setItem("cartItems", JSON.stringify(this.cartStore.items));
    },
    removeItem(productId, colorId = null) {
      this.cartStore.removeItem(productId, colorId);
    },
    toggleSelectAll() {
      const allSelected = this.allSelected;
      this.cartStore.items.forEach((item) => {
        item.selected = !allSelected;
      });
    },
    removeSelectedItems() {
      this.cartStore.removeSelectedItems();
    },
    clearCart() {
      this.cartStore.clearCart();
    },
  },
};

</script>

<style>
.cart-page {
  width: 100%;
  height: auto;
  flex-wrap: wrap;

}


.cart-page h1 {
  color: #232323;
  font-size: 32px;
  line-height: 39px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 20px;
}


.cart-list {
  max-width: 955px;
}

.select-all {
  max-height: 84px;
  padding: 24px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  display: flex;
  margin-bottom: 16px;
  align-items: center;
  position: relative;
  justify-content: start;
}

input[type="checkbox"] {
  appearance: none;
  width: 24px;
  height: 24px;
  color: #f4f4f5;
  border: 2px solid #a1a1aa;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  margin: 16px;
}

input[type="checkbox"]:checked {
  background-color: #dc2840;
}

input[type="checkbox"]:checked::after {
  content: "✔";
  position: absolute;
  top: 1px;
  left: 4px;
  font-size: 14px;
  color: #f4f4f5;
}

.select-all label {
  /* position: absolute; */
  /* left: 110px;
  top: 27px; */
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 600;


}

.select-all button {
  position: absolute;
  width: 86px;
  height: 36px;
  right: 24px;
  top: 27px;
  justify-items: flex-end;
  border-radius: 8px;
  background: #ececec;
  color: #1a1a1a;
  font-size: 14px;
  line-height: 22px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  border: none;
  transition: background-color 0.5s ease, color 0.5s ease;
}

.order-detail {
  max-width: 311px;
}

.item-color {
  font-size: 16px;
  color: #676767;
  margin: 5px 0;
}

.cart-item {
  padding: 24px;
  display: flex;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  display: flex;
  margin-bottom: 16px;
  align-items: center;
  position: relative;
  min-height: 120px;
}

.cart-item img {
  max-width: 120px;
  max-height: 120px;

}

.item-details {
  flex: 1;
  max-width: 498px;
  max-height: 120px;
  margin-left: 16px;

}


button.basket img {
  width: 24px;
  height: 24px;
}

.item-name {
  max-width: 498x;
  max-height: 120px;
  color: #232323;
  font-size: 20px;
  line-height: 24px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}

.item-color img {
  width: 24px;
  height: 24px;
}

.item-details2 {
  width: 230px;
  height: 120px;
  margin-left: 16px;
  position: relative;
}

.item-details2 .item-price {
  position: absolute;
  right: 1px;
  top: 1px;
  font-size: 20px;
  line-height: 24px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}

.item-details2 .basket {
  width: 24px;
  height: 24px;
  position: absolute;
  right: 140px;
  bottom: 10px;
  margin: 0 10px;
  border: none;
}

.item-details2 .item-quantity {
  position: absolute;
  right: 1px;
  bottom: 1px;
}

.item-quantity button {
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 4px;
  background-color: #f4f4f5;
  font-size: 16px;
  line-height: 19.5px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}

.item-quantity img {
  width: 28px;
  height: 28px;

}

.order-detail {
  width: 100%;
  text-align: justify;
}

.order-detail h2 {
  font-size: 20px;
  line-height: 24.5px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  margin-bottom: 24px;
}

.order-detail .total {
  font-size: 20px;
  line-height: 24.5px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  margin-top: 16px;
}

.order-detail .to-order-button {
  width: 263px;
  height: 44px;
  border-radius: 8px;
  background: #dc2840;
  color: #FAFAFF;
  font-size: 16px;
  line-height: 24.38px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  border: none;
  transition: background-color 0.5s ease, color 0.5s ease;
  margin-top: 24px;
}

.order-detail .total-price,
.order-detail .delivery {
  display: flex;
  justify-content: space-between;
}

.order-detail .to-order-button:hover {
  background: #dc2866;
  color: #FAFAf5;
}
</style>