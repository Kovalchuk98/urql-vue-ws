import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import urql, { cacheExchange, fetchExchange } from '@urql/vue';

const app = createApp(App)

app.use(createPinia())
.use(urql, {
    url: 'https://graphql.bubble.chat:8081/',
    exchanges: [cacheExchange, fetchExchange]
  })

app.mount('#app')
