<template>
  <div id="hero" class="hero">
    <div class="hero-wrapper overlay"></div>
    <div class="hero-cont container">
      <div class="hero-logo-wrapper">
        <img
          class="hero-logo"
          src="@/assets/images/logo-1.png"
          alt=""
        />
      </div>
      <div class="hero-action">
        <div class="down-btn">
          <a
            href="#stats"
            v-smooth-scroll="{
              duration: 450,
              offset: -100,
              updateHistory: true,
            }"
          >
            <i class="fas fa-angle-double-down"></i>
          </a>
        </div>

        <div>
          <a @click="soundControl">
            <i v-if="!noAudio" class="fas fa-volume-down"></i>
            <i v-else class="fas fa-volume-off"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'hero',
  data() {
    return {
      noAudio: true,
    }
  },
  methods: {
    soundControl() {},
  },
}
</script>
<style lang="scss" scoped></style>
