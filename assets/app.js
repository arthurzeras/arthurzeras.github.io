Vue.component('my-modal', {
  template: `
  <transition enter-active-class="animated slideInDown" leave-active-class="animated slideOutUp">
    <div class="my-modal" v-if="show">
      <h1 class="title">{{ title }}</h1>
      <button class="btn close-button" @click="$emit('close')">
        <i class="zmdi zmdi-close zmdi-hc-2x"></i>
      </button>
      <slot></slot>
    </div>
  </transition>
  `,
  props: ['show', 'title']
})

new Vue({
  el: '#app',
  data: {
    knoledgesModal: false,
    talkModal: false,
    knowledges: [
      {icon: 'devicon-javascript-plain', name: 'Javascript'},
      {icon: 'devicon-vuejs-plain', name: 'Vue.js'},
      {icon: 'devicon-php-plain', name: 'PHP'},
      {icon: 'devicon-laravel-plain', name: 'Laravel'},
      {icon: 'devicon-sass-original', name: 'SASS'},
      {icon: 'devicon-html5-plain', name: 'HTML5'},
      {icon: 'devicon-nodejs-plain', name: 'Node JS'},
      {icon: 'devicon-bootstrap-plain', name: 'Bootstrap'},
      {icon: 'devicon-css3-plain', name: 'CSS3'},
      {icon: 'devicon-express-original', name: 'Express'},
      {icon: 'devicon-git-plain', name: 'Git'},
      {icon: 'devicon-github-plain', name: 'Github'},
      {icon: 'devicon-bitbucket-plain', name: 'Bitbucket'},
      {icon: 'devicon-mysql-plain', name: 'MySQL'},
      {icon: 'devicon-apple-original', name: 'MacOS'},
      {icon: 'devicon-windows8-plain', name: 'Windows'},
      {icon: 'devicon-linux-plain', name: 'Linux'},
      {icon: 'devicon-photoshop-plain', name: 'Photoshop'},
      {icon: 'devicon-slack-plain', name: 'Slack'},
      {icon: 'devicon-webpack-plain', name: 'Webpack'},
      {icon: 'devicon-phpstorm-plain', name: 'PHP Storm'},
      {icon: 'devicon-webstorm-plain', name: 'WebStorm'}
    ]
  }
})
