<template>
  <layout class-prefix="layout">
    {{onRecordList()}}
    <NumberPad :old-number.sync="record.amount" />
    <Tab :type-value.sync="record.type"/>
    <FormItem v-model="record.notes"/>
    <Tags :data-source.sync="tagsList" :record-tags.sync="record.tags"/>
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';
  import Layout from '@/components/Layout.vue';
  import Tags from '@/components/Money/Tags.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Tab from '@/components/Money/Tab.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  
  @Component({
    components: {NumberPad, Tab, FormItem, Layout, Tags}
  })
  export default class Money extends Vue {
    @Watch('record',{immediate:false,deep:true})
    onRecordList(){
      return this.record;
    }
    
    tagsList: TagsItem[]=[
      {name:'衣',id:1},
      {name:'食',id:2},
      {name:'住',id:3},
      {name:'行',id:4},
    ]
    
    record : RecordItem = {
      tags:[],
      notes:'',
      type:'-',
      amount:10
    }
    
    updateNote(value:string) : void{
      console.log('note');
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