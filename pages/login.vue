<template>
  <main
    class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <logo class="h-8 w-8c mx-auto" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div>
        <button
          @click="signInWithGoogle"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg
              role="img"
              class="h-5 w-5 text-blue-200 group-hover:text-blue-300"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
              />
            </svg>
          </span>
          Sign in with Google
        </button>
      </div>
    </div>
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