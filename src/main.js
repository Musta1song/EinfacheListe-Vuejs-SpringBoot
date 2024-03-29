import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from './router'
//vuetify

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(router).use(vuetify).mount('#app')

