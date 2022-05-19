<template>
  <layout class-prefix="edit-label">
    <div class="nav-bar">
      <Icon class="leftIcon" name="left" @click="goBack"/>
      <span class="title">编辑标签名</span>
      <span class="rightIcon"></span>
    </div>
    <Input field-name="标签名" placeholder="请输入标签名"
           :value="currentTag.name"
           @input="updateTag"/>
    <Button class="delete-tag" button-name="删除标签" @click="removeTag"/>
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Icon from '@/components/Icon.vue';
  import Layout from '@/components/Layout.vue';
  import Button from '@/components/Button.vue';
  import Input from '@/components/Input.vue';
  import {cloneDeep} from 'lodash';
  @Component({
    components: {Input, Button, Layout, Icon}
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
      this.$router.go(-1)
    }
    updateTag(newName:string){
      this.$store.commit('updateTag',{id:this.currentTag.id,newName:newName})
    }
    removeTag(){
      this.$store.commit('removeTag',this.currentTag.id)
    }
  }
</script>

<style lang="scss" scoped>
  .edit-label-wrapper{
    background: #e5e5e5;
  }
  .nav-bar{
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
  .form-item{
    background: white;
    font-size: 16px;
    padding: 12px 15px;
    input{
      margin-left: 12px;
    }
  }
  .delete-tag{
    margin-top: 500px;
  }
</style>