<template>
  <div>
       TypeScript - Vue Starter Kit <br>
       {{ copyrightYears }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Bottom extends Vue {
  public copyrightYears: string = new Date().getFullYear().toString()

  // Vue hooks
  public mounted (): void {
    this.copyrightYears = this.copyright()
  }

  public copyright (): string {
    const buildYear: number = new Date().getFullYear()
    const startingYear = 2019

    return (buildYear !== startingYear) ? (startingYear + '-' + buildYear).toString() : startingYear.toString()
  }
}
</script>

<style scoped>

div {
  color: var(--secundary-font-color);
  font-size: 1.5vh;
}
</style>
