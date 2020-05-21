import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const dayName = day => {
  let weekday = ''
  switch (day) {
    case 0:
      weekday = 'Domingo'
      break
    case 1:
      weekday = 'Lunes'
      break
    case 2:
      weekday = 'Martes'
      break
    case 3:
      weekday = 'Miércoles'
      break
    case 4:
      weekday = 'Jueves'
      break
    case 5:
      weekday = 'Viernes'
      break
    case 6:
      weekday = 'Sabado'
      break
  }
  return weekday
}
const months = m => {
  let month = ''
  switch (m) {
    case 0:
      month = 'Enero'
      break
    case 1:
      month = 'Febrero'
      break
    case 2:
      month = 'Marzo'
      break
    case 3:
      month = 'Abril'
      break
    case 4:
      month = 'Mayo'
      break
    case 5:
      month = 'Junio'
      break
    case 6:
      month = 'Julio'
      break
    case 7:
      month = 'Agosto'
      break
    case 8:
      month = 'Septiembre'
      break
    case 9:
      month = 'Octubre'
      break
    case 10:
      month = 'Noviembre'
      break
    case 11:
      month = 'Diciembre'
      break
  }
  return month
}

const formattedLugar = lugarRow => {
  let direccion = lugarRow.direccion || ''
  let ciudad = lugarRow.ciudad || ''
  let estado = lugarRow.estado || ''
  let pais = lugarRow.pais || ''
  return (
    (direccion ? direccion + ', ' : '') +
    (ciudad ? ciudad + ', ' : '') +
    (estado ? estado + ' - ' : '') +
    (pais ? pais : '')
  )
}

const formattedDate = timestamp => {
  let date = timestamp.toDate()
  let weekday = dayName(date.getDay())
  let day = pad(date.getDate())
  let month = months(date.getMonth())

  return `${weekday}, ${day} de ${month}`
}
const pad = n => {
  return n < 10 ? '0' + n : n
}
const formattedTime = timestamp => {
  let date = timestamp.toDate()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let ampm = hours >= 12 ? 'pm' : 'am'
  hours = hours % 12
  hours = hours ? hours : 12 // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes
  let strTime = hours + ':' + minutes + ' ' + ampm
  return strTime
}

export default new Vuex.Store({
  state: {
    eventos: [],
    windowWidth: 0,
    loadingEventos: false,
    loadingRecomendaciones: false,
    loadingStats: false,
    stats: [],
    testimonios: [],
  },
  mutations: {
    addTestimonio(state, payload) {
      state.testimonios.push(payload)
    },
    addStat(state, payload) {
      state.stats.unshift(payload)
    },
    setLoadingEventos(state, payload) {
      state.loadingEventos = payload
    },
    setLoadingRecomendaciones(state, payload) {
      state.loadingRecomendaciones = payload
    },
    setLoadingStats(state, payload) {
      state.loadingStats = payload
    },
    setWindowWidth(state, payload) {
      state.windowWidth = payload
    },
    setEventos(state, payload) {
      state.eventos = payload
    },
    addEvento(state, evento) {
      state.eventos.push(evento)
    },
  },
  actions: {},
  getters: {
    proximosEventos: state => {
      let now = new Date()
      let timestampNow = now.getTime()
      return state.eventos
        .filter(evento => {
          if (evento.fecha.toDate().getTime() > timestampNow) {
            console.log(formattedDate(evento.fecha))

            return evento
          }
        })
        .map(evento => {
          return {
            ...evento,
            fecha: formattedDate(evento.fecha),
            hora: formattedTime(evento.fecha),
            timestamp: evento.fecha,
            lugar: formattedLugar(evento.lugar),
          }
        })
    },
    formattedEventos: state => {
      return state.eventos.map(evento => {
        return {
          ...evento,
          fecha: formattedDate(evento.fecha),
          hora: formattedTime(evento.fecha),
          timestamp: evento.fecha,
          lugar: formattedLugar(evento.lugar),
        }
      })
    },
  },
})
