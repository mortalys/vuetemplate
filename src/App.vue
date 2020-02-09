<template>
  <div class="container">
    <header>
          <p>Welcome Developer</p>
    </header>

    <main>
      <Users />
    </main>

    <footer>
      <p>TypeScript - Vue Starter Kit <br> 2020</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
//import bottom from './views/bottom.vue'
import Users from './domains/users/components/_main.vue'

@Component({
  name: 'App',
  components: {
    Users,
  }
})
export default class App extends Vue {}
</script>

<style>
@import "./assets/css/base.css";
</style>
