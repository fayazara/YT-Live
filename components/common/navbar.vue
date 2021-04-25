<template>
  <header
    class="py-4 px-4 lg:px-0 xl:px-0 border-b border-gray-300 bg-white dark:border-gray-900 shadow-sm dark:bg-black frosted sticky top-0 z-50"
  >
    <nav class="flex items-center justify-between space-x-3 container mx-auto">
      <nuxt-link to="/" class="focus:outline-none flex-shrink-0">
        <div class="flex items-center space-x-2">
          <logo class="h-8 w-8" />
          <p class="font-semibold">YT LIVE</p>
        </div>
      </nuxt-link>
      <search-bar />
      <button
        class="bg-yellow-500 text-gray-800 rounded-lg px-4 py-2 flex-shrink-0"
      >
        Buy me coffee?
      </button>
      <profile-dropdown />
    </nav>
  </header>
</template>

<script>
import profileDropdown from "./profileDropdown";
import SearchBar from "./searchBar.vue";
export default {
  components: {
    profileDropdown,
    SearchBar,
  },
};
</script>