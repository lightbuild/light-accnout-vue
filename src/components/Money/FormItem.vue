<template>
  <div class="form-item">
    <label>
      <span class="name">备注</span>
      <input type="text" placeholder="在这里可以为标签添加备注"
             @change="$emit('update-value',$event.target.value)">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  
  @Component
  export default class FormItem extends Vue {
  
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