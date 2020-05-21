<template>
  <div id="app">
    <loading v-if="loading" />
    <nav-bar></nav-bar>
    <hero />
    <stats ref="stats" />
    <proximo-evento />
    <pensamiento />
    <acerda-de />
    <testimonios />
    <agenda />
    <ponente />
    <contacto />
    <colofon />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Pensamiento from '@/components/Pensamiento'
import Agenda from '@/components/Agenda'
import Testimonios from '@/components/Testimonios'
import AcercaDe from '@/components/AcercaDe'
import ProximoEvento from '@/components/ProximoEvento'
import Ponente from '@/components/Ponente'
import Contacto from '@/components/Contacto'
import Colofon from '@/components/Colofon'
export default {
  name: 'App',
  components: {
    'nav-bar': NavBar,
    hero: Hero,
    stats: Stats,
    pensamiento: Pensamiento,
    agenda: Agenda,
    testimonios: Testimonios,
    'acerda-de': AcercaDe,
    'proximo-evento': ProximoEvento,
    ponente: Ponente,
    contacto: Contacto,
    colofon: Colofon,
  },
  computed: {
    loading() {
      return this.$store.state.loading
    },
  },
}
</script>

<style lang="scss">
@import '~@/scss/main.scss';
</style>
