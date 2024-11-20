import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  // начальное состояние хранилища
  state: () => ({
    items: JSON.parse(localStorage.getItem('cartItems')) || [], // Массив товаров в корзине
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  }),
  actions: {
    // методы: Добавить товар в корзину   
    addItem(product) {
      const existingProduct = this.items.find(item =>
        item.id === product.id && (item.color?.id || null) === (product.color?.id || null)
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
      this.updateLocalStorage();
    },

    // Удалить товар из корзины
    removeItem(productId, colorId = null) {
      this.items = this.items.filter((item) => {
        // console.log('до фильтра:', item);
        // Если есть цвет
        if (item.color?.id !== undefined) {
          return item.id !== productId || item.color.id !== colorId;
        }
        // Если нет цвета
        else {
          return item.id !== productId;
        }

      });
      // console.log('после фильтра:', this.items);
      this.updateLocalStorage();
    },
    // Очистить корзину
    clearCart() {
      this.items = [];
      this.updateLocalStorage();
    },
    // избранное
    toggleFavorite(product) {
      const existingFavorite = this.favorites.find(item => item.id === product.id);
      if (existingFavorite) {
        this.favorites = this.favorites.filter(item => item.id !== product.id);
      } else {
        this.favorites.push(product);
      }
      this.updateLocalStorage();
    },

    removeSelectedItems() {
      this.items = this.items.filter(item => !item.selected);
      this.updateLocalStorage();
    },

    updateLocalStorage() {
      localStorage.setItem('cartItems', JSON.stringify(this.items));
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    },
  },


  getters: {
    // computed: Получить общую стоимость корзины
    totalPrice() {
      return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },

    isFavorite: (state) => (productId) =>
      state.favorites.some((item) => item.id === productId),
  },

});