<template>
  <main class="container mx-auto py-12">
    <h1 class="text-xl">Profile</h1>
    <br />
    <button
      class="bg-blue-500 text-white px-6 py-3 rounded"
      @click="writeToFirestore"
    >
      Save
    </button>
    <br />
    <button
      class="bg-blue-500 text-white px-6 py-3 rounded"
      @click="readFromFirestore"
    >
      Get Data
    </button>
  </main>
</template>

<script>
export default {
  middleware: "auth",
  methods: {
    async logout() {
      await this.$fire.auth.signOut();
      this.$router.push("/login");
    },
    async writeToFirestore() {
      const messageRef = this.$fire.firestore
        .collection(this.$store.getters["authUser"].uid)
        .doc("Zee Business");
      try {
        await messageRef.set({
          name: "Zee Business",
          category: "News",
          language: "Hindi",
          youtube_id: "6iGehEp8cAU",
          youtube_link: "https://www.youtube.com/watch?v=6iGehEp8cAU",
          youtube_embed_link: "https://www.youtube.com/embed/6iGehEp8cAU",
          iframe_supported: true,
        });
      } catch (e) {
        alert(e);
        return;
      }
      alert("Success.");
    },
    async readFromFirestore() {
      const messageRef = this.$fire.firestore.collection(
        this.$store.getters["authUser"].uid
      );
      try {
        const messageDoc = await messageRef.get();
        messageDoc.docs.map((doc) => console.log(doc.data()));
      } catch (e) {
        alert(e);
        return;
      }
    },
  },
};
</script>

<style>
</style>