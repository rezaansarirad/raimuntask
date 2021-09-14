<template>
  <div class="d-flex flex-row">
    <div class="right-side d-flex justify-center align-center flex-column">
      <div class="circle-right-side"></div>
      <div class="d-flex flex-column justify-center align-center">
        <p>
          Selected Items : <span>{{ getSelectedProducts().length }}</span>
        </p>
        <p>:Total Price</p>
        <h2>{{ $formatPriceIR(getAllPrice()) }}</h2>
      </div>

      <div
        class="d-flex justify-center align-center btn-report"
        @click="gotToReport()"
      >
        CREATE REPORT
      </div>
    </div>
    <div class="main">
      <v-row class="justify-right">
        <v-col cols="12" lg="3" v-for="(item, i) in products" :key="i">
          <product
            :product="item"
            :index="i"
            @selectProduct="selectProduct"
            @removeProduct="removeProduct"
          ></product>
        </v-col>
      </v-row>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      products: [
        {
          name: "product 1",
          price: 15000,
          id: 1,
        },
        {
          name: "product 2",
          price: 50000,
          id: 2,
        },
        {
          name: "product 3",
          price: 15000,
          id: 3,
        },
        {
          name: "product 4",
          price: 15000,
          id: 4,
        },
        {
          name: "product 5",
          price: 15000,
          id: 5,
        },
        {
          name: "product 6",
          price: 50000,
          id: 6,
        },
        {
          name: "product 7",
          price: 15000,
          id: 7,
        },
        {
          name: "product 8",
          price: 15000,
          id: 8,
        },
         {
          name: "product 9",
          price: 15000,
          id: 9,
        },
         {
          name: "product 10",
          price: 15000,
          id: 10,
        },
      ],
    };
  },
  methods: {
    gotToReport() {
      this.$router.push("/checkout");
    },
    selectProduct(index) {
      console.log(index);
      this.$store.commit("addProduct", this.products[index]);
    },
    getSelectedProducts() {
      return this.$store.state.productsSelected;
    },
    removeProduct(index) {
      console.log(index);
      this.$store.commit("removeProduct", this.products[index]);
    },
    getAllPrice() {
      let allPrice = 0;
      for (let item of this.getSelectedProducts()) {
        allPrice += item.price;
      }
      return allPrice;
    },
  },
};
</script>
<style scoped>
.right-side {
  background-color: #5a8fee;
  position: absolute;
  top: 60px;
  right: 0;
  bottom: 0;
  overflow-y: hidden;
  width: 350px;
  color: #fff;
}
.main {
  height: 92vh;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-right: 400px;
  width: 100%;
}
.btn-report {
  background-color: #fff;
  border-radius: 15px;
  width: 90%;
  height: 60px;
  position: absolute;
  bottom: 10px;
  color: #5a8fee;
  cursor: pointer;
}
.circle-right-side {
  background-color: #5482d7;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
}
</style>
