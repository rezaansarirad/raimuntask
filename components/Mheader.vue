<template>
  <div class="header-bg">
    <div class="loader">
      <div class="return" @click="retrunTOHome()"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    retrunTOHome() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.return {
  background-color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
}
.header-bg {
  background-color: #3d6cc1;
  height: 60px;
  direction: ltr;
}
.loader {
  max-width: 100px;
  background-color: #3d6cc1;
}
</style>
