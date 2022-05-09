<template>
  <div class="tabs">
    <ul class="container">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  
  @Component
  export default class Tab extends Vue {
  
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/reset.scss";
  @import "~@/assets/style/helper.scss";
  .tabs {
    .container {
      background: #c4c4c4;
      display: flex;
      justify-content: center;
      align-items: center;
      
      li {
        width: 50%;
        height: 64px;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        
        &.selected {
          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: #333;
          }
        }
      }
      
    }
    
  }
</style>