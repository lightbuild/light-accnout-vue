<template>
  <div class="form-item">
    <label>
      <span class="name">{{fieldName}}</span>
      <input type="text" :placeholder="placeholder"
             :value="value"
             @input="$emit('input',$event.target.value)">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Model, Prop} from 'vue-property-decorator';
  
  @Component
  export default class FormItem extends Vue {
    @Model('input',{type:String}) value!:string
    @Prop({default:''}) placeholder!:string
    @Prop({required:true})fieldName!:string
    @Prop({default:''}) value!:string
  }
</script>

<style lang="scss" scoped>
  .form-item {
    padding-top: 25px;
    padding-bottom: 26px;
    background: #e5e5e5;
    display: flex;
    padding-left: 16px;
    align-items: center;
    
    .name {
      padding-right: 16px;
    }
    
    input {
      border: none;
      height: 40px;
      background: transparent;
    }
  }
</style>