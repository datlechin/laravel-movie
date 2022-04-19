<script>
import Plyr from 'plyr'
import 'plyr/dist/plyr.css'

export default {
  props: {
    options: Object,
  },
  data() {
    return {
      player: null,
    }
  },
  mounted() {
    this.player = new Plyr(this.$refs.videoPlayer)
    this.player.source = this.options
  },
  beforeDestroy() {
    if (this.player) {
      this.player.destroy()
    }
  },
}
</script>

<template>
  <video ref="videoPlayer" :data-plyr-config="this.options"></video>
</template>