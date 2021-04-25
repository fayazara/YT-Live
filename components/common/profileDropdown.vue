<template>
  <div class="relative flex items-center" v-on-clickaway="closeMenu">
    <button
      v-if="$store.getters['isLoggedIn']"
      @click="showMenu = !showMenu"
      class="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
    >
      <div class="h-8 w-8 rounded-full border overflow-hidden">
        <img :src="user.photoURL" :alt="user.displayName" />
      </div>
    </button>
    <nuxt-link
      to="/login"
      v-else
      class="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
    >
      <svg
        class="w-8 h-8 text-gray-700 dark:text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    </nuxt-link>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="showMenu"
        class="origin-top-right absolute top-10 right-0 rounded-md shadow-lg border border-gray-300 dark:border-gray-900 dark:divide-gray-900 bg-white dark:bg-gray-800 overflow-hidden text-gray-500 dark:text-gray-100"
      >
        <div class="px-4 py-2 border-b dark:border-gray-900">
          <p class="text-xs">Signed in as</p>
          <p>{{ user.email }}</p>
        </div>
        <a
          href="https://github.com/fayazara/YT-Live"
          target="_blank"
          rel="noopener"
          class="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
          >Help</a
        >
        <nuxt-link
          @click.native="closeMenu"
          to="/favourites"
          class="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
          >Favourites</nuxt-link
        >
        <button
          @click="logout"
          class="px-4 py-2 w-full border-t dark:border-gray-900 text-left hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          Logout
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import { directive as onClickaway } from "vue-clickaway";

export default {
  data() {
    return {
      showMenu: false,
    };
  },
  computed: {
    user() {
      return this.$store.getters["authUser"];
    },
  },
  methods: {
    closeMenu() {
      this.showMenu = false;
    },
    async logout() {
      await this.$fire.auth.signOut();
      this.showMenu = false;
      this.$router.push("/");
    },
  },
  directives: {
    onClickaway: onClickaway,
  },
};
</script>

<style>
</style>