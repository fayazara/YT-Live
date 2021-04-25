<template>
  <main class="container mx-auto pt-24 lg:pt-28">
    <div>
      <h1 class="text-xl font-semibold mb-4 px-4">Your Favourites</h1>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 pr-0 lg:pr-4 xl:pr-4"
      >
        <yt-card v-for="(channel, c) in channels" :key="c" :channel="channel" />
      </div>
    </div>
  </main>
</template>

<script>
import ytCard from "~/components/common/ytCard.vue";
export default {
  middleware: "auth",
  components: { ytCard },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["isLoggedIn"];
    },
    channels() {
      if (this.isLoggedIn) return this.$store.getters["userFavourites"];
      else return [];
    },
  },
  methods: {
    async getFavs() {
      // Get Favourites
      try {
        this.loading = true;
        const messageRef = this.$fire.firestore.collection(
          this.$store.getters["authUser"].uid
        );
        const messageDoc = await messageRef.get();
        let favourites = messageDoc.docs.map((doc) => doc.data());
        if (favourites.length)
          this.$store.commit("SET_USER_FAVOURITES", favourites);
        this.loading = false;
      } catch (e) {
        this.$toast.error(e);
        this.loading = false;
        return;
      }
    },
  },
  mounted() {
    this.getFavs();
  },
};
</script>