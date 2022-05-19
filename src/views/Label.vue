<template>
  <layout class-prefix="layout-label">
    <div class="label-wrapper">
      <router-link class="tag" :to="{name:'edit',params:{id:`${tag.id}`}}" v-for="tag of tagsList" :key="tag.id">
        <span>{{ tag.name }}</span>
        <Icon name="right"></Icon>
      </router-link>
      <div class="createTag-wrapper">
        <button class="createTag" @click="createTag">新增标签</button>
      </div>
    </div>
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Layout from '@/components/Layout.vue';
  import Icon from '@/components/Icon.vue';
  import createdId from '@/lib/createId';
  
  @Component({
    components: {Icon, Layout}
  })
  export default class Label extends Vue {
    created(){
      this.$store.commit('fetchTag')
    }
    get tagsList() {
      return this.$store.state.tagsList;
    }
    createTag(){
      let maxId = createdId(this.tagsList)
      this.$store.commit('createTag',maxId)
    }
  }
</script>

<style lang="scss" scoped>
  .label-wrapper {
    display: flex;
    flex-direction: column;
    background: white;
    font-size: 20px;
    
    > .tag {
      padding: 15px;
      min-height: 44px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e6e6e6;
      
      svg {
        width: 24px;
        height: 24px;
        color: #333333;
        margin-right: 12px;
      }
    }
    .createTag-wrapper{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 28px;
      
      > .createTag{
        color: white;
        border-radius: 4px;
        background: #767676;
        font-size: 17px;
        padding: 9px 16px;
      }
    }
  }
</style>