<template>
  <v-card max-width="250" class="product-cards d-flex flex-column">
    <div class="d-flex justify-center align-center flex-column">
      <p
       class="circle-product"
      ></p>
      <h2>{{ product.name }}</h2>
      <p>{{ $formatPriceIR(product.price) }}</p>
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
  </v-card>
</template>


<script>
export default {
  props: ["product", "index"],
  emits: ["selectProduct", "removeProduct"],
  data() {
    return {
      addTocardSelect: true,
      removeTocard: false,
    };
  },
  methods: {
    addToCard() {
      this.addTocardSelect = false;
      this.removeTocard = true;
      this.$emit("selectProduct", this.index);
    },
    removeFromCard() {
      (this.addTocardSelect = true), (this.removeTocard = false);
      this.$emit("removeProduct", this.index);
    },
  },
};
</script>



<style scoped>
.circle-product{
     background-color: #dbe5f5;
          border-radius: 50%;
          width: 150px;
          height: 150px;
}
.product-cards {
  border: 1px solid #578ceb;
  border-radius: 20px;
  box-shadow: 4px 2px 10px #80808069;
  margin: 5px;
  padding: 10px;
}
</style>