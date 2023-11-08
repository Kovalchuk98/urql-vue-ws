import urql, { cacheExchange, fetchExchange, subscriptionExchange } from '@urql/vue';
import { createClient as createWSClient } from 'graphql-ws';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/main.css'

const wsClient = createWSClient({
  url: 'wss://graphql.bubble.chat:8081/',
});

const app = createApp(App)

app.use(createPinia())
.use(urql, {
    url: 'https://graphql.bubble.chat:8081/',
    exchanges: [cacheExchange, fetchExchange, subscriptionExchange({
      forwardSubscription(request) {
        const input = { ...request, query: request.query || '' };
        return {
          subscribe(sink) {
            const unsubscribe = wsClient.subscribe(input, sink);
            return { unsubscribe };
          },
        };
      },
    })]
  })

app.mount('#app')
