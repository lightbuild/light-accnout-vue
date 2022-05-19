<template>
  <div class="button-wrapper">
    <button @click="$emit('click',$event)">{{buttonName}}</button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component,Prop} from 'vue-property-decorator';
  
  @Component
  export default class Button extends Vue {
    @Prop(String) buttonName!:string
  }
</script>

<style lang="scss" scoped>
  .button-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    
    > button{
      color: white;
      border-radius: 4px;
      background: #767676;
      font-size: 17px;
      padding: 9px 16px;
    }
  }
</style>