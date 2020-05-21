<template>
  <div id="pensamiento" class="pensamiento">
    <div class="video-bg-wrapper">
      <transition name="fade">
        <img
          v-show="showVideoImg_bg"
          class="video-bg"
          src="~@/assets/images/video-bg.jpg"
          alt=""
          srcset=""
          :width="`${windowWidth}px`"
          :height="`${videoHeight}px`"
        />
      </transition>
      <transition name="fade">
        <youtube
          v-show="!showVideoImg_bg"
          class="video-bg"
          :video-id="videoId"
          :player-width="`${windowWidth}px`"
          :player-height="`${videoHeight}px`"
          :player-vars="{
            autoplay: 1, // Auto-play the video on load
            autohide: 1,
            disablekb: 1,
            controls: 0, // Hide pause/play buttons in player
            showinfo: 0, // Hide the video title
            modestbranding: 1, // Hide the Youtube Logo
            loop: 1, // Run the video in a loop
            fs: 0, // Hide the full screen button
            autohide: 0, // Hide video controls when playing
            rel: 0,
            enablejsapi: 1,
            iv_load_policy: 3,
            playlist: videoId,
          }"
          @ready="videoReady"
          @playing="videoPlaying"
          @buffering="showVideoImg_bg = true"
        ></youtube>
      </transition>
      <div class="pensamiento-titulo">
        <h4>
          <i class="fas fa-quote-left"></i>

          No siempre como es afuera <br />
          Es adentro

          <i class="fas fa-quote-right"></i>
        </h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pensamiento',
  data() {
    return {
      videoId: 'BqD7NHRLc30',
      showVideoImg_bg: true,
    }
  },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth
    },
    videoHeight() {
      let calcHeight = (this.windowWidth * 9) / 16
      return calcHeight
    },
  },
  methods: {
    videoReady(e) {
      this.player = e.target
      console.log('video ready')
    },
    videoPlaying() {
      console.log('video playing')
      this.showVideoImg_bg = false
    },
  },
  created() {},
}
</script>
<style lang="scss" scoped></style>
