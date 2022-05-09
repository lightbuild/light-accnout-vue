<template>
  <div id="nav">
    <router-link to="/money">
      <Icon name="money"></Icon>
      Money
    </router-link>
    <router-link to="/label">
      <Icon name="label"></Icon>
      Label</router-link>
    <router-link to="/statistics">
      <Icon name="statistics"></Icon>
      Statistics</router-link>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Icon from '@/components/Icon.vue';
  
  @Component({
    components: {Icon}
  })
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