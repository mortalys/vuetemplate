<template>
  <div class="mastfoot mt-auto">
    <div class="inner">
      <p class="small">
        <a
          href="https://www.vizrtgroup.com/"
          class="mr-3"
        ><img
          src="./../assets/media/images/vizrt-group-com.svg"
        ></a>
        Copyright © Vizrt AG. {{ copyrightYears }} All rights reserved.
      </p>
    </div>
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
.mastfoot {
  position: relative;
  color: rgba(255, 255, 255, .5);
}
</style>
