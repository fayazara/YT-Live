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
  methods: {
    async getFavourites() {
      // Get Favourites
      const messageRef = this.$fire.firestore.collection(
        this.$store.getters["authUser"].uid
      );
      try {
        const messageDoc = await messageRef.get();
        let favourites = messageDoc.docs.map((doc) => doc.data());
        if (favourites.length)
          this.$store.commit("SET_USER_FAVOURITES", favourites);
      } catch (e) {
        alert(e);
        return;
      }
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["isLoggedIn"];
    },
  },
  mounted() {
    if (this.isLoggedIn) this.getFavourites();
  },
};
</script>