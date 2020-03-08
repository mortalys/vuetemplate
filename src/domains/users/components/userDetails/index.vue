<template>
  <div v-if='user'>
  {{ user.username }} Details:<br/>
  ID: {{ user.id }} <br/>
  Name: {{ user.name }}
  </div>
</template>

<style lang="scss" src="./index.scss" scoped></style>