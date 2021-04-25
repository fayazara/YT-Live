<template>
  <main class="container mx-auto pt-24 lg:pt-28">
    <div class="flex items-center space-x-2">
      <ul
        class="flex flex-grow items-center space-x-2 w-full overflow-x-scroll px-4 lg:px-0 xl:px-0 mb-4 dark:mb-0"
      >
        <li v-for="language in languages" :key="language">
          <button
            class="px-4 py-1 rounded-full border text-sm focus:outline-none"
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
      <!-- Countries -->
      <select
        class="bg-transparent text-gray-900 rounded-lg border-0 form-select p-0 pl-3.5 pr-[1.875rem] h-9 w-full sm:text-sm font-medium focus:shadow-none focus-visible:ring-2 focus-visible:ring-teal-500"
        style="background-image: none"
      >
        <option value="html">HTML</option>
        <option value="react">React</option>
        <option value="vue">Vue</option>
      </select>
      <!-- Countries -->
    </div>
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
