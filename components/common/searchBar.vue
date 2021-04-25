<template>
  <div>
    <div class="relative">
      <button class="search-button" @click="$modal.show('searchModal')">
        Search
        <span class="hidden sm:inline">channels (Press "/")</span>
      </button>
      <div
        class="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center"
      >
        <svg
          class="fill-current pointer-events-none w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
          ></path>
        </svg>
      </div>
    </div>
    <modal adaptive focusTrap name="searchModal">
      <div class="p-4 flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <svg
            class="fill-current w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
            ></path>
          </svg>
          <input
            type="text"
            class="focus:outline-none border-0 bg-white dark:bg-gray-700"
            v-model="q"
            placeholder="Search"
            @input="onChange"
          />
        </div>
        <button
          @click="$modal.hide('searchModal')"
          class="focus:outline-none text-2xl"
        >
          ×
        </button>
      </div>
      <ul class="h-64 overflow-y-scroll divide-y dark:divide-gray-600 bg-white dark:bg-gray-700">
        <li v-for="(channel, c) in channels" :key="c">
          <nuxt-link
            @click.native="$modal.hide('searchModal')"
            :to="channel.slug"
            class="p-4 flex items-center justify-between focus:bg-gray-600"
          >
            <p class="text-fb-blue font-semibold">
              {{ channel.name }} ({{ channel.language }})
            </p>
            <gb-flag :code="channel.country_code" size="small" />
          </nuxt-link>
        </li>
      </ul>
    </modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      q: null,
      channels: [],
    };
  },
  methods: {
    async onChange() {
      this.channels = await this.$content("channels")
        .only(["name", "language", "country_code", "slug"])
        .search(this.q)
        .fetch();
    },
  },
};
</script>

<style scoped>
.search-button {
  @apply transition-colors duration-100 ease-in-out text-gray-600 dark:text-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal border border-transparent rounded-lg focus:outline-none text-left select-none truncate bg-gray-200 dark:bg-gray-700 focus:bg-white focus:border-gray-300 dark:focus:bg-gray-600 dark:focus:border-gray-500;
}
</style>