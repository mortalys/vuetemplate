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

<style lang="scss" src="./index.scss" scoped></style>