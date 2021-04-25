<template>
  <div class="w-full flex-grow min-w-0">
    <div class="relative">
      <button class="search-button">
        Search
        <span class="hidden sm:inline">the docs (Press "/" to focus)</span>
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
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.search-button {
  @apply transition-colors duration-100 ease-in-out text-gray-600 dark:text-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal border border-transparent rounded-lg focus:outline-none text-left select-none truncate bg-gray-200 dark:bg-gray-700 focus:bg-white focus:border-gray-300 dark:focus:bg-gray-600 dark:focus:border-gray-500;
}
</style>