<template>
  <div class="tags">
    <ul class="container">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>出</li>
    </ul>
    <div class="button-new">
      <button>新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  
  @Component
  export default class Tags extends Vue {
  
  }
</script>

<style lang="scss" scoped>
  @use "sass:math";
  @import "~@/assets/style/reset.scss";
  
  .tags {
    font-size: 14px;
    background: white;
    display: flex;
    flex-direction: column;
    
    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-content: center;
      
      > li {
        display: flex;
        align-items: center;
        $h: 24px;
        height: $h;
        background: #D9D9D9;
        border-radius: math.div($h, 2);
        padding: 2px 18px;
        outline: 0.3em  solid black;
        margin: 16px;
      }
    }
    
    > .button-new {
      margin-top: 10px;
      margin-bottom: 5px;
      > button {
        margin-left: 16px;
        border: none;
        background: transparent;
        color: #999999;
        border-bottom: 1px solid;
        padding: 0 4px;
      }
    }
  }
</style>