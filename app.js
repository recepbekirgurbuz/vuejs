window.addEventListener('load', () => {

  window.vue = new Vue({
    el: '#app',
    name: 'Cart',
    data: {
      isLoading: true,
      cart: [],
      saved: []
    },
    methods: {
      removeFromCart(index) {
        this.cart.splice(index, 1);
      },
      saveForLater(index) {
        const book = this.cart.splice(index, 1);
        this.saved.push(book[0]);
      },
      moveToCart(index) {
        const book = this.saved.splice(index, 1);
        this.cart.push(book[0]);
      }
    },
    created() {
      fetch('data.json')
        .then((res) => { return res.json() })
        .then((res) => {
          this.isLoading = false;
          this.cart = res.cart;
          this.saved = res.saved;
        })
    }
  })

});
