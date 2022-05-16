<template>
  <div class="tabs">
    <ul class="container">
      <li :class="this.typeValue === '-' && 'selected'" @click="select('-')">支出</li>
      <li :class="this.typeValue === '+' && 'selected'" @click="select('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  
  @Component
  export default class Tab extends Vue {
    @Prop(String) typeValue!:string
    
    select(type:string):void{
      if(type!=="-" && type !=="+"){
        throw new Error('type is unknown')
      }
      this.$emit('update:typeValue',type)
    }
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