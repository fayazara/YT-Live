<template>
  <main class="p-8">
    <h1 class="text-6xl">Login Page</h1>
    <button
      class="bg-blue-500 text-white px-6 py-3 rounded"
      @click="signInWithGoogle"
    >
      Google
    </button>
  </main>
</template>


<script>
export default {
  methods: {
    async signInWithGoogle() {
      try {
        var provider = new this.$fireModule.auth.GoogleAuthProvider();
        await this.$fire.auth.signInWithPopup(provider);
      } catch (err) {
        this.$toast.show(err);
      }
    },
  },
};
</script>

<style>
</style>