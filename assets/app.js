new Vue({
  el: '#app',
  data () {
    return {
      buttons: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.buttons = true
    }, 1000)
  }
})
