<template>
  <div>
    <ul class="space-y-4">
      <yt-card
        v-for="(channel, c) in channels"
        :key="c"
        :channel="channel"
        :applyMargin="true"
      />
    </ul>
  </div>
</template>

<script>
import ytCard from "~/components/common/ytCard.vue";

export default {
  props: ["language", "currentChannel"],
  data() {
    return {
      channels: [],
    };
  },
  async fetch() {
    let channels = await this.$content("channels")
      .where({ language: this.language })
      .fetch();

    this.channels = channels.filter(
      (item) => item.name !== this.currentChannel
    );
  },
  components: {
    ytCard,
  },
};
</script>

<style>
.h-nav {
  height: calc(100vh - 65px - 2rem);
}
</style>