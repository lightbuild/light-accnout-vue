<template>
  <div id="nav">
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"></Icon>
      记账
    </router-link>
    <router-link to="/label" class="item" active-class="selected">
      <Icon name="label"></Icon>
      标签</router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"></Icon>
      统计</router-link>
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
    
    .item{
      padding:2px 0;
      width: 33.333%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon{
        width: 32px;
        height: 32px;
      }
    }
    .selected{
      color: $color-highlight;
    }
  }
</style>