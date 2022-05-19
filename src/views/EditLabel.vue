<template>
  <layout class-prefix="edit-label">
    <div class="icon-wrapper">
      <Icon class="leftIcon" name="left" @click="goBack"/>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="tag-wrapper">
      <span>标签名</span>
      <input type="text" :value="currentTag.name">
    </div>
    <div class="deleteTag-wrapper">
      <button class="deleteTag">删除标签</button>
    </div>
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Icon from '@/components/Icon.vue';
  import Layout from '@/components/Layout.vue';
  @Component({
    components: {Layout, Icon}
  })
  export default class EditLabel extends Vue {
    created():void{
      this.$store.commit('fetchTag')
      const id =  Number(this.$route.params.id)
      this.$store.commit('getCurrentTag',id)
    }
    get currentTag(){
      return this.$store.state.currentTag
    }
    goBack(){
      console.log('here');
      this.$router.go(-1)
    }
  }
</script>

<style lang="scss" scoped>
  .edit-label-wrapper{
    background: #e5e5e5;
  }
  .icon-wrapper{
    background: white;
    display: flex;
    justify-content: space-between;
    padding:15px;
    font-size: 18px;
    margin-bottom: 8px;
    svg {
      width: 24px;
      height: 24px;
      color: #333333;
      margin-right: 12px;
    }
    .rightIcon{
      width: 24px;
      height: 24px;
    }
  }
  .tag-wrapper{
    background: white;
    font-size: 16px;
    padding: 12px 15px;
    input{
      margin-left: 12px;
    }
  }
  .deleteTag-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 500px;
  
    > .deleteTag{
      color: white;
      border-radius: 4px;
      background: #767676;
      font-size: 17px;
      padding: 9px 16px;
    }
  }
</style>