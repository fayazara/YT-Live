<template>
  <div class="dark:text-white text-gray-800">
    <navbar />
    <Nuxt />
    <!-- <footr /> -->
  </div>
</template>

<script>
import navbar from "../components/common/navbar";
export default {
  components: {
    navbar,
  },
};
</script>