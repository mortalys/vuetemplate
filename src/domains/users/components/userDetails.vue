<template>
  <div v-if='user'>
  {{ user.username }} Details:<br/>
  ID: {{ user.id }} <br/>
  Name: {{ user.name }}
  </div>
</template>

<script lang="ts">
// core vue libraries
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

// models
import { IUser } from './../models/_main'

@Component({
  name: 'UsersDetails'
})
export default class UsersDetails extends Vue {    
  @Prop() user!: IUser;

  // Vue hooks
  public async mounted (): Promise<boolean> {      

    return true
  }

}
</script>

<style scoped>
</style>
