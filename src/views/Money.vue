<template>
  <layout class-prefix="layout-money">
    {{record}}
    <NumberPad :old-number.sync="record.amount" @submit="saveRecord"/>
    <Tab :type-value.sync="record.type"/>
    <FormItem field-name="备注" placeholder="在这里添加备注" v-model.trim="record.notes"/>
    <Tags ref="userTags" :record-tags.sync="record.tags"/>
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch,Ref} from 'vue-property-decorator';
  import Layout from '@/components/Layout.vue';
  import Tags from '@/components/Money/Tags.vue';
  import FormItem from '@/components/Input.vue';
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
 ::v-deep .layout-money-content {
   display: flex;
   flex-direction: column-reverse;
 }
</style>