<template>
  <header
    class="py-4 px-4 lg:px-0 xl:px-0 border-b border-gray-300 bg-white dark:border-gray-900 shadow-sm dark:bg-black frosted sticky top-0 z-50"
  >
    <nav class="flex items-center justify-between container mx-auto">
      <nuxt-link to="/" class="focus:outline-none">
        <div class="flex items-center space-x-2">
          <logo class="h-8 w-8" />
          <p class="font-semibold">YT LIVE</p>
        </div>
      </nuxt-link>
      <profile-dropdown />
    </nav>
  </header>
</template>

<script>
import profileDropdown from "./profileDropdown";
export default {
  components: {
    profileDropdown,
  },
};
</script>