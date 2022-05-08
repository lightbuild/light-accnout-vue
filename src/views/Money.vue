<template>
  <layout>
    我是money页面
    <Tags/>
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Layout from '@/components/Layout.vue';
  import Tags from '@/components/Money/Tags.vue';
  @Component({
    components: {Layout,Tags}
  })
  export default class Money extends Vue {
  
  }
</script>

<style lang="scss" scoped>

</style>