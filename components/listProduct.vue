<template>
  <div class="product-cards d-flex flex-row justify-space-between align-center">
    <div class="d-flex align-center">
      <p class="circle-product"></p>
      <div class="d-flex flex-column" style="margin-left: 20px">
        <h2>{{ product.name }}</h2>
        <p>{{ $formatPriceIR(product.price) }}</p>
      </div>
    </div>

    <div>
      <v-btn
        class="w100"
        v-show="addTocardSelect"
        @click="addToCard()"
        outlined
        rounded
        >Add TO CARD</v-btn
      >
      <v-btn
        class="w100"
        v-show="removeTocard"
        @click="removeFromCard()"
        rounded
        color="primary"
        >REMOVE FROM CARD</v-btn
      >
    </div>
  </div>
</template>


<script>
export default {
  props: ["product", "index"],
  emits: ["selectProduct", "removeProduct"],
  data() {
    return {
      addTocardSelect: false,
      removeTocard: true,
    };
  },
  methods: {
    addToCard() {
      this.addTocardSelect = true;
      this.removeTocard = false;
      this.$emit("selectProduct", this.index);
    },
    removeFromCard() {
      (this.addTocardSelect = false), (this.removeTocard = true);
      this.$emit("removeProduct", this.index);
    },
  },
};
</script>



<style scoped>
.circle-product {
  background-color: #bebebe;
  border-radius: 50%;
  width: 90px;
  height: 90px;
}
.product-cards {
  direction: ltr;
  border-radius: 50px;
  box-shadow: 3px 2px 4px rgb(128 128 128 / 41%);
  margin: 5px;
  padding: 10px;
}
</style>