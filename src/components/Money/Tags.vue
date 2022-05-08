<template>
  <div class="tags">
    <ul>
      <li>衣服</li>
      <li>食物</li>
      <li>住宿</li>
      <li>出行</li>
    </ul>
    <span>
      新增标签
    </span>
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
  .tags{
    border: 1px solid red;
    min-height: 260px;
  }
</style>