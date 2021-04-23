<template>
  <main class="container mx-auto py-0 lg:py-8 xl:py-8">
    <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      <div class="col-span-1 lg:col-span-2 xl:col-span-2">
        <div class="overflow-hidden relative w-full video-container">
          <iframe
            :src="`https://www.youtube.com/embed/${channel.youtube_id}`"
            frameborder="0"
            class="absolute top-0 left-0 h-full w-full"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div
          class="py-4 border-b flex items-center space-x-2 px-4 md:px-0 lg:px-0 xl:px-0"
        >
          <img
            class="h-9 w-9 rounded-full"
            :src="`/channel-logos/${channel.slug}.jpg`"
            :alt="channel.name"
          />
          <h1 class="text-xl font-semibold">{{ channel.name }}</h1>
        </div>
      </div>
      <suggested-channels
        :language="channel.language"
        :currentChannel="channel.name"
      />
    </div>
  </main>
</template>

<script>
import suggestedChannels from "~/components/channels/suggestedChannels.vue";
export default {
  components: { suggestedChannels },
  async asyncData({ $content, params }) {
    const channel = await $content("channels", params.channel).fetch();
    return { channel };
  },
};
</script>

<style scoped>
.video-container:after {
  padding-top: 56.25%;
  display: block;
  content: "";
}
</style>