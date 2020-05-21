import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vueSmoothScroll from 'vue2-smooth-scroll'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'
import 'firebase/messaging'
import firebaseConfig from '@/fbconfig'
import VueYouTubeEmbed from 'vue-youtube-embed'

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()
export const fb = firebase

Vue.use(VueYouTubeEmbed)
Vue.use(vueSmoothScroll)

Vue.config.productionTip = false

Vue.prototype.$db = db

new Vue({
  store,
  render: h => h(App),
  async created() {
    let ww = window.innerWidth
    this.$store.commit('setWindowWidth', ww)

    window.addEventListener('resize', () => {
      let ww = window.innerWidth
      this.$store.commit('setWindowWidth', ww)
    })

    this.$store.commit('setLoadingEventos', true)

    let eventos = await this.$db
      .collection('eventos')
      .limit(20)
      .orderBy('fecha', 'asc')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.$store.commit('addEvento', {
            id: doc.id,
            ...doc.data(),
          })
        })
        return { status: 'ok' }
      })
      .catch(error => {
        return { status: 'error', error }
      })

    this.$store.commit('setLoadingStats', true)

    let stats = await this.$db
      .collection('stats')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.$store.commit('addStat', {
            ...doc.data(),
            id: doc.id,
            animated: false,
            startValue: 0,
          })
        })
        return { status: 'ok' }
      })
      .catch(error => {
        return { status: 'error', error }
      })

    this.$store.commit('setLoadingRecomendaciones', true)

    let recomendaciones = await this.$db
      .collection('recomendaciones')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.$store.commit('addTestimonio', {
            id: doc.id,
            ...doc.data(),
          })
        })
        return { status: 'ok' }
      })
      .catch(error => {
        return { status: 'error', error }
      })

    if (eventos && eventos.status === 'ok') {
      this.$store.commit('setLoadingEventos', false)
    }
    if (recomendaciones && recomendaciones.status === 'ok') {
      this.$store.commit('setLoadingRecomendaciones', false)
    }
    if (stats && stats.status === 'ok') {
      this.$store.commit('setLoadingStats', false)
    }
  },
}).$mount('#app')
