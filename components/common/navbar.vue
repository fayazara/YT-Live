<template>
  <header
    class="flex bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 fixed top-0 inset-x-0 z-50 h-16 items-center"
  >
    <div class="w-full max-w-screen-xl relative mx-auto px-6">
      <div class="flex items-center -mx-6">
        <div class="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
          <div class="flex items-center">
            <nuxt-link to="/" class="focus:outline-none flex-shrink-0 lg:mr-4">
              <div class="flex items-center space-x-2">
                <logo class="h-8 w-8" />
                <p class="font-semibold hidden md:block lg:block xl:block">
                  YT LIVE
                </p>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="flex flex-grow min-w-0 lg:w-3/4 xl:w-4/5">
          <search-bar class="w-full min-w-0 lg:px-6 xl:w-3/4 xl:px-12" />
          <button
            @click="showMenu = !showMenu"
            id="sidebar-open"
            class="flex px-6 items-center lg:hidden text-gray-500 dark:text-gray-300 focus:outline-none focus:text-gray-700 dark:focus:text-gray-400"
            aria-label="Open site navigation"
          >
            <svg
              v-if="showMenu"
              class="fill-current w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
              ></path>
            </svg>
            <svg
              class="fill-current w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              v-else
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
          <div
            class="hidden lg:flex lg:items-center lg:justify-between xl:w-1/4 px-6"
          >
            <a
              href="https://github.com/fayazara/YT-Live"
              target="_blank"
              rel="noopener"
              class="bg-gray-200 dark:bg-gray-700 rounded-lg px-4 py-2 flex-shrink-0 flex items-center space-x-2 mr-4"
            >
              <svg
                class="w-5 h-5 text-gray-600 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p>Channel Request</p>
            </a>
            <div class="flex justify-start items-center text-gray-500">
              <profile-dropdown />
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="showMenu"
        class="absolute left-0 border-b dark:border-gray-600 bg-white dark:bg-gray-800 w-full shadow-lg"
      >
        <ul class="divide-y dark:divide-gray-600 pt-4">
          <li><profile-dropdown-mobile @closeMenu="showMenu = false" /></li>
          <li class="p-4">
            <nuxt-link
              @click.native="showMenu = false"
              to="/favourites"
              class="block"
              >Favourites</nuxt-link
            >
          </li>
          <li class="p-4">
            <a href="https://github.com/fayazara/YT-Live" class="block"
              >New Channel Request</a
            >
          </li>
          <li class="p-4">
            <a href="https://github.com/fayazara/YT-Live" class="block"
              >About</a
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import profileDropdown from "./profileDropdown";
import ProfileDropdownMobile from "./profileDropdownMobile.vue";
import SearchBar from "./searchBar.vue";
export default {
  components: {
    profileDropdown,
    SearchBar,
    ProfileDropdownMobile,
  },
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>