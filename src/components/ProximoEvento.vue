<template>
  <div id="proximo-evento" class="proximo-evento">
    <div class="container">
      <h1 class="titulo-seccion">Próximos Eventos</h1>
      <div class="p-event-content">
        <div
          class="p-event-item"
          v-for="evento in proximosEventos"
          :key="evento.id"
        >
          <div class="p-event-card fecha">
            <div class="icon-wrapper">
              <i class="fas fa-calendar-alt"></i>
            </div>
            <h3 class="p-event-card-title">Fecha</h3>
            <p class="p-event-card-data">
              {{ evento.fecha }}
            </p>
          </div>
          <div class="p-event-card hora">
            <div class="icon-wrapper">
              <i class="fas fa-clock"></i>
            </div>
            <h3 class="p-event-card-title">Hora</h3>
            <p class="p-event-card-data">
              {{ evento.hora }}
            </p>
          </div>
          <div class="p-event-card lugar">
            <div class="icon-wrapper">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <h3 class="p-event-card-title">Lugar</h3>
            <p class="p-event-card-data">
              {{ formattedPlace(evento.lugar) }}
            </p>
          </div>
          <div class="p-event-card responsable">
            <div class="image-wrapper">
              <img
                v-if="evento.responsable"
                :src="evento.responsable.image_url"
                alt="imagen de responsable"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'proximo-evento',
  computed: {
    ...mapGetters({
      proximosEventos: 'proximosEventos',
    }),
  },
  methods: {
    formattedPlace() {},
  },
}
</script>
<style lang="scss" scoped></style>
