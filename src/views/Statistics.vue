<template>
  <layout>
    我是统计页面
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Layout from '@/components/Layout.vue';
  @Component({
    components: {Layout}
  })
  export default class Statistics extends Vue {
  
  }
</script>

<style lang="scss" scoped>

</style>