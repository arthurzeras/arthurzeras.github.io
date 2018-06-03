Vue.component('my-modal', {
  template: `
  <div class="my-modal">
    <button class="btn close-button" @click="$emit('close')">
      <i class="zmdi zmdi-close zmdi-hc-2x"></i>
    </button>
    <slot></slot>
  </div>
  `
})

new Vue({
  el: '#app',
  data: {
    pageState: 'home',
    buttons: false
  },
  mounted () {
    setTimeout(() => {
      this.buttons = true
    }, 1000)
  }
})
