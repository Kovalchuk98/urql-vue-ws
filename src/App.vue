<script setup lang="ts">
import { watch } from "vue"
import { gql, useQuery, useSubscription } from '@urql/vue';

const result = useQuery({
      query: gql`
        {
          visitors {
          id
          }
        }
      `
    });

const document = gql`
      subscription onMessageAdded {
        messageNew {
        id
        text
        dialog {
          id
          visitor {
            id
          }
          }
        }
      }
    `

    const { data: newMessage } = useSubscription({
      query: document,
    })

    watch(
      newMessage,
      data => {
        console.log("New message received:", data.newMessage)
      },
      // {
      //   lazy: true // Don't immediately execute handler
      // }
    )

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      URQL Client
    </div>
  </header>
  <div>
    {{ result?.data.value?.visitors }}
  </div>
  <div>
    new message block  <br>{{ newMessage }}
  </div>
  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
