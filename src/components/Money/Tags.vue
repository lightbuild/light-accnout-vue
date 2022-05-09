<template>
  <div class="tags">
    <div class="button-new">
      新增标签
    </div>
    <ul class="container">
      <li>衣服</li>
      <li>食物</li>
      <li>住宿</li>
      <li>出行</li>
      <li>衣服</li>
      <li>食物</li>
      <li>住宿</li>
      <li>出行</li>
    </ul>
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
  .tags{
    font-size: 14px;
    background: white;
    border: 1px solid red;
    display: flex;
    flex-direction: column-reverse;
    .container{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
      > li{
        display: flex;
        align-items: center;
        $h:24px;
        height: $h;
        background: #D9D9D9;
        border-radius: math.div($h,2);
        margin:16px;
        padding: 2px 18px;
        border: 1px solid red;
      }
    }
    .button-new{
      border: 1px solid red;
    }
  }
</style>