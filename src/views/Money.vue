<template>
  <layout class-prefix="layout">
    {{record}}
    <NumberPad :old-number.sync="record.amount" @submit="saveRecord"/>
    <Tab :type-value.sync="record.type"/>
    <FormItem v-model.trim="record.notes"/>
    <Tags ref="userTags" :record-tags.sync="record.tags"/>
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch,Ref} from 'vue-property-decorator';
  import Layout from '@/components/Layout.vue';
  import Tags from '@/components/Money/Tags.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Tab from '@/components/Money/Tab.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  
  @Component({
    components: {NumberPad, Tab, FormItem, Layout, Tags}
  })
  export default class Money extends Vue {
    @Ref() readonly userTags!:Tags
    created(){
      this.$store.commit('fetchRecord')
    }
    record : RecordItem = {
      tags:[],
      notes:'',
      type:'-',
      amount:10
    }
    saveRecord(){
      this.$store.commit('saveRecord',this.record)
      this.userTags.clearSelectedTags()
    }
  }
</script>

<style lang="scss" scoped>
 ::v-deep .layout-content {
   display: flex;
   flex-direction: column-reverse;
 }
</style>