<template>
  <div id="stats" class="stats">
    <div class="container">
      <h1 class="titulo-seccion">
        Estadísticas de alcance de la conferencia
      </h1>
      <div class="stats-content">
        <div
          class="card-stat"
          v-for="(stat, i) in stats"
          :key="i"
          :class="handleOrder(stat)"
          :ref="stat.id"
        >
          <div class="icon-wrapper">
            <i :class="stat.icon_class"></i>
          </div>
          <div class="stat-value">
            {{ stat.startValue }}
          </div>
          <div class="stat-title">{{ stat.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'stats',
  data() {
    return {
      offsetTop: 0,
    }
  },
  watch: {
    offsetTop() {
      this.callbackFunc()
    },
  },
  computed: {
    stats() {
      return this.$store.state.stats
    },
  },
  methods: {
    onScroll() {
      this.offsetTop =
        window.pageYOffset || document.documentElement.scrollTop
    },
    isElementInViewport(el) {
      var rect = el.getBoundingClientRect()

      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight ||
            document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      )
    },
    callbackFunc() {
      let items = this.stats.map(s => {
        return {
          ...s,
          el: this.$refs[s.id][0],
        }
      })

      for (var i = 0; i < items.length; i++) {
        let item = items[i]
        if (this.isElementInViewport(item.el)) {
          let id = item.id
          let end = item.value
          let start = 0
          let duration = 1500

          if (!item.animated) {
            this.animateNumber(id, start, end, duration)
          }
        }
      }
    },
    handleOrder(stat) {
      let myClass = ''
      switch (stat.id) {
        case 'personas':
          myClass = 'order1'
          break
        case 'parejas':
          myClass = 'order2'
          break
        case 'ciudades':
          myClass = 'order3'
          break
        case 'paises':
          myClass = 'order4'
          break
      }
      return myClass
    },
    animateNumber(id, start, end, duration) {
      let startTimestamp = null
      const step = timestamp => {
        if (!startTimestamp) startTimestamp = timestamp

        const progress = Math.min(
          (timestamp - startTimestamp) / duration,
          1,
        )

        let travel = end - start
        let traveled = progress * travel

        let statIndex = this.stats.map(s => s.id).indexOf(id)
        this.stats[statIndex].startValue = Math.floor(
          traveled + start,
        )

        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
        this.stats[statIndex].animated = true
      }
      window.requestAnimationFrame(step)
    },
  },
  mounted() {},
  created() {
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
  },
}
</script>
<style lang="scss" scoped>
.order1 {
  order: 1;
}
.order2 {
  order: 2;
}
.order3 {
  order: 3;
}
.order4 {
  order: 4;
}
</style>
