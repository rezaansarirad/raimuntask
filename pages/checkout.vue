<template>
  <v-container>
    <div class="d-flex justify-center align-center flex-column">
      <h1>CARD REPORT</h1>

      <div style="width: 50%" class="d-flex flex-column">
        <div v-for="(item, i) in getSelectedProducts()" :key="i">
          <listProduct
            :product="item"
            :index="i"
            @selectProduct="selectProduct"
            @removeProduct="removeProduct"
          ></listProduct>
        </div>
        <v-divider></v-divider>
        <div class="d-flex flex-column align-center total">
          <div class="d-flex w100">
            <h2>
              TOTAL PRICE
              ------------------------------------------------------------
            </h2>
            <p>{{ $formatPriceIR(getAllPrice()) }}</p>
          </div>
          <div class="d-flex w100">
            <h2>
              TOTAL COUNT
              ------------------------------------------------------------
            </h2>
            <p>{{ getSelectedProducts().length }}</p>
          </div>
          <v-btn class="w100" max-height="40px" rounded color="primary"
            >PAY</v-btn
          >
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  methods: {
    getSelectedProducts() {
      return this.$store.state.productsSelected;
    },
    getAllPrice() {
      let allPrice = 0;
      for (let item of this.getSelectedProducts()) {
        allPrice += item.price;
      }
      return allPrice;
    },
    selectProduct(index) {
      this.$store.commit("addProduct", this.products[index]);
    },
    removeProduct(index) {
      this.$store.commit("removeProductWithIndex", index);
    },
  },
};
</script>

<style scoped>
.total {
  direction: ltr;
  margin-top: 10px;
}
</style>