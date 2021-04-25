<template>
  <div class="p-4">
    <div
      class="flex items-center justify-between"
      v-if="$store.getters['isLoggedIn']"
    >
      <div class="flex items-center space-x-2">
        <div class="h-8 w-8 rounded-full border overflow-hidden">
          <img :src="user.photoURL" :alt="user.displayName" />
        </div>
        <div>
          <p class="text-xs">Signed in as</p>
          <p class="text-gray-500 dark:text-gray-500">{{ user.email }}</p>
        </div>
      </div>
      <button @click="logout">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          ></path>
        </svg>
      </button>
    </div>
    <nuxt-link
      @click.native="$emit('closeMenu')"
      to="/login"
      v-else
      class="flex items-center space-x-2"
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
      <p>Login</p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters["authUser"];
    },
  },
  methods: {
    async logout() {
      await this.$fire.auth.signOut();
      this.showMenu = false;
      this.$router.push("/");
    },
  },
};
</script>