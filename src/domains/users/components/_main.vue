<template>
  <div class="containerRow">    
    <div class="row">

      <h3>Listing Users:</h3>

      <li v-for="user in domain.users.data" v-bind:key="user.id">      
        <a @click="userDetailsView(user)">{{ user.username }}</a>
      </li>

    </div>

    <div class="row">      
      <UsersDetails 
        :user='selectedUser'
        v-show='selectedUser'/>
    </div>    
  </div>

</template>

<script lang="ts">
// core vue libraries
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

// domain logic
import UsersDomain from './../index'

// domain components
import UsersDetails from './userDetails.vue'

// models
import { IUser } from './../models/_main'

// vue-class
import { namespace } from 'vuex-class'
//const ServiceStatusModule = namespace('ServiceStatus')

@Component({
  name: 'Users',
  components: {
    UsersDetails
  }
})

export default class Users extends Vue {
  public domain: UsersDomain = new UsersDomain();

  public selectedUser: IUser | null = null;
 
  // Vue hooks
  public async mounted (): Promise<boolean> {

    // Get Users
    await this.domain.users.userInfoList();   

    return true
  }

  public userDetailsView(user: IUser) {      
    this.selectedUser = user;      
  }
}
</script>

<style scoped>
a {
  color:aqua;
  cursor: pointer;
}

</style>
