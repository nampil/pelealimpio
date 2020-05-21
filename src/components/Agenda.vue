<template>
  <div id="agenda" class="agenda">
    <div class="container">
      <h1 class="titulo-seccion">Agenda</h1>
      <div class="agenda-content">
        <table class="agenda-table">
          <tr>
            <th>País</th>
            <th>Fecha</th>
            <th>Lugar</th>
            <th>Más Detalles</th>
          </tr>
          <tr v-for="(evento, i) in eventos" :key="i">
            <td><img :src="evento.pais_bandera" alt="" /></td>
            <td>{{ evento.fecha }}</td>
            <td>{{ evento.lugar }}</td>
            <td>{{ evento.detalles }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'agenda',
  computed: {
    eventos() {
      return this.$store.getters.formattedEventos
    },
  },
}
</script>
<style lang="scss" scoped></style>
