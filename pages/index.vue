<template>
  <div class="flex">
    <aside class="h-nav-screen top-0 sticky w-64 pt-[65px]">
      <ul>
        <li class="px-4 py-2">
          <div class="flex items-center space-x-2">
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <p>Popular</p>
          </div>
        </li>
        <li class="px-4 py-2">
          <div class="flex items-center space-x-2">
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <p>Favourites</p>
          </div>
        </li>
        <li class="px-4 py-2"></li>
        <li class="px-4 py-2"></li>
        <li class="px-4 py-2"></li>
        <li class="px-4 py-2"></li>
      </ul>
    </aside>
    <main class="container mx-auto py-12 flex-grow">
      <ul
        class="flex items-center space-x-2 w-full overflow-x-scroll px-4 lg:px-0 xl:px-0 mb-4 dark:mb-0"
      >
        <li v-for="language in languages" :key="language">
          <button
            class="language-button"
            @click="filterLanguage(language)"
            :class="
              chosenLanguage === language
                ? 'bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100'
            "
          >
            {{ language }}
          </button>
        </li>
      </ul>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 pr-0 lg:pr-4 xl:pr-4"
      >
        <yt-card
          v-for="(channel, c) in filteredChannels"
          :key="c"
          :channel="channel"
        />
      </div>
    </main>
  </div>
</template>

<script>
import ytCard from "~/components/common/ytCard.vue";
export default {
  transition: "fade",
  data() {
    return {
      chosenLanguage: "All",
    };
  },
  async asyncData({ $content }) {
    const channels = await $content("channels").fetch();
    return { channels };
  },
  methods: {
    filterLanguage(lang) {
      this.chosenLanguage = lang;
      console.log(this.filteredChannels);
    },
  },
  computed: {
    languages() {
      return ["All"].concat([
        ...new Set(this.channels.map((channel) => channel.language)),
      ]);
    },
    filteredChannels() {
      if (this.chosenLanguage === "All") return this.channels;
      return this.channels.filter(
        (channel) => channel.language === this.chosenLanguage
      );
    },
  },
  components: {
    ytCard,
  },
};
</script>

<style scoped>
.language-button {
  @apply px-4 py-1 rounded-full border text-sm focus:outline-none;
}

.h-nav-screen {
  height: 75vh;
}
</style>