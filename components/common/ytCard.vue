<template>
  <div class="relative group">
    <button
      @click="save"
      class="absolute top-9 right-2 rounded bg-trans-gray h-8 w-8 z-30 flex items-center justify-center invisible group-hover:visible"
    >
      <svg
        class="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        ></path>
      </svg>
    </button>
    <nuxt-link :to="channel.slug">
      <div class="overflow-hidden">
        <div class="relative overflow-hidden zoom pb-56">
          <div
            class="w-full h-full flex items-center justify-center bg-gray-300 animate-pulse absolute top-0"
          >
            <p class="text-xs font-semibold uppercase">Loading Image</p>
          </div>
          <img
            class="w-full h-full object-cover absolute top-0"
            :src="`https://img.youtube.com/vi/${channel.youtube_id}/0.jpg`"
            :alt="channel.name"
          />
        </div>
      </div>
      <div
        class="flex items-center justify-between px-4 md:px-0 lg:px-0 xl:px-0 mt-4 dark:mt-0"
        :class="{ 'mt-4': applyMargin }"
      >
        <div class="flex items-center space-x-2">
          <img
            class="h-9 w-9 rounded-full"
            :src="`/channel-logos/${channel.slug}.jpg`"
            :alt="channel.name"
          />
          <p class="font-semibold">{{ channel.name }}</p>
        </div>
        <p class="text-xs">{{ channel.country }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["channel", "applyMargin"],
  methods: {
    async save() {
      const messageRef = this.$fire.firestore
        .collection(this.$store.getters["authUser"].uid)
        .doc(this.channel.name);
      try {
        await messageRef.set(this.channel);
      } catch (e) {
        this.$toast.error(e);
        return;
      }
      this.$toast.success("Added to favourites");
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["isLoggedIn"];
    },
  },
};
</script>

<style scoped>
.bg-trans-gray {
  background-color: #000000cc;
}
</style>