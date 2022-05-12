<template>
  <layout class-prefix="layout">
    {{record}}
    <NumberPad/>
    <Tab/>
    <FormItem v-on:update-value="onFormItem"/>
    <Tags/>
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Layout from '@/components/Layout.vue';
  import Tags from '@/components/Money/Tags.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Tab from '@/components/Money/Tab.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  
  @Component({
    components: {NumberPad, Tab, FormItem, Layout, Tags}
  })
  export default class Money extends Vue {
    record : RecordItem = {
      tags:[],
      notes:'',
      type:'-',
      amount:0
    }
      
      onFormItem(value:string) : void{
      this.record.notes= value
    }
    
    
  }
</script>

<style lang="scss" scoped>
 ::v-deep .layout-content {
   display: flex;
   flex-direction: column-reverse;
 }
</style>