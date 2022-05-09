<template>
  <div id="nav">
    <router-link to="/money">Money</router-link> |
    <router-link to="/label">Label</router-link>|
    <router-link to="/statistics">Statistics</router-link>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  
  @Component
  export default class Nav extends Vue {
  
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  #nav {
    @extend %outShadow;
    display: flex;
    flex-direction: row;
    font-size: 16px;
    justify-content: center;
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>