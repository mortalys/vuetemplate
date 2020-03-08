<template>
  <div class="container">
    <header>
          <p>Welcome Developer</p>
    </header>

    <main>
      <Users />
    </main>

    <footer>
      <Bottom />
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Bottom from './views/Bottom.vue';
import Users from './domains/users/components/_main/index';

@Component({
  name: 'App',
  components: {
    Users,
    Bottom
  }
})
export default class App extends Vue {}
</script>

<style>
@import "./assets/css/base.css";
</style>
