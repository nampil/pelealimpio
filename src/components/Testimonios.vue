<template>
  <div id="testimonio" class="testimonio">
    <div class="container">
      <h1 class="titulo-seccion">Recomendaciones</h1>
      <div class="testimonio-content">
        <div
          class="testimonio-item"
          v-for="testimonio in testimonios"
          :key="testimonio.id"
        >
          <div class="avatar-wrapper">
            <img :src="testimonio.avatarUrl" alt="" class="avatar" />
          </div>
          <p class="testimonio-text">{{ testimonio.testimonio }}</p>
          <h2 class="testimonio-title">{{ testimonio.title }}</h2>
          <h3 class="testimonio-subtitle">
            {{ testimonio.subtitle }}
          </h3>
          <p class="testimonio-semblanza">
            {{ testimonio.semblanza }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'testimonio',
  computed: {
    testimonios() {
      return this.$store.state.testimonios
    },
  },
}
</script>
<style lang="scss" scoped></style>
