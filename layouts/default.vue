<template>
  <v-app>
    <Mheader></Mheader>
    <div>
      <Nuxt />
    </div>
  </v-app>
</template>

<script>
import Mheader from "../components/Mheader.vue";
export default {
  components: {
    Mheader,
  },
  data() {
    return {};
  },
};
</script>
