<template>
  <div class="tags">
    {{tagsList}}
    <ul class="container">
      <li v-for="tag of tagsList" :key="tag.id"
          @click="toggle(tag.name)"
          :class="{selected:selectedTags.includes(tag.name)}"
      >{{tag.name}}</li>
    </ul>
    <div class="button-new">
      <button @click="createTag">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import createdId from '@/lib/createId';
 
  @Component
  export default class Tags extends Vue {
    @Prop()  recordTags:[] | undefined
    get tagsList(){
      return this.$store.state.tagsList
    }
    selectedTags:string[]= []
    created(){
      this.$store.commit('fetchTag')
    }
    clearSelectedTags(){
      this.selectedTags= []
    }
    toggle(name:string):void{
      if (this.selectedTags.includes(name)){
          const index = this.selectedTags.indexOf(name);
          this.selectedTags.splice(index,1);
      }else {
        this.selectedTags.push(name)
        this.$emit('update:recordTags',this.selectedTags)
      }
    }
    createTag(){
      let maxId = createdId(this.tagsList)
      this.$store.commit('createTag',maxId)
      this.$store.commit('saveTag')
    }
  }
</script>

<style lang="scss" scoped>
  @use "sass:math";
  @import "~@/assets/style/reset.scss";
  
  .tags {
    font-size: 14px;
    background: white;
    display: flex;
    flex-direction: column;
    
    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-content: center;
      
      > li {
        display: flex;
        align-items: center;
        $h: 24px;
        height: $h;
        background: #D9D9D9;
        border-radius: math.div($h, 2);
        padding: 2px 18px;
        outline: 0.3em  solid black;
        margin: 16px;
        
        &.selected{
          outline: 0.3em solid green;
          background: darken(#D9D9D9,50%);
          color: white;
        }
      }
    }
    
    > .button-new {
      margin-top: 10px;
      margin-bottom: 5px;
      > button {
        margin-left: 16px;
        border: none;
        background: transparent;
        color: #999999;
        border-bottom: 1px solid;
        padding: 0 4px;
      }
    }
  }
</style>