<template>
  <div class="tags">
    <ul class="container">
      <li v-for="tag in tags" :key="tag.id"
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
  import {Component} from 'vue-property-decorator';
 
  @Component
  export default class Tags extends Vue {
    tags: TagsItem[]=[
      {name:'衣',id:1},
      {name:'食',id:2},
      {name:'住',id:3},
      {name:'行',id:4},
    ]
    selectedTags:string[]= []
    
    toggle(name:string):void{
      let test = this.$store.state.myFood.someField
      console.log(test);
      if (this.selectedTags.includes(name)){
          const index = this.selectedTags.indexOf(name);
          this.selectedTags.splice(index,1);
      }else {
        this.selectedTags.push(name)
      }
    }
    
    createdId():number{
      let id = this.tags[this.tags.length-1].id;
      id++
      return id;
    }
    createTag(e:PointerEvent):void{
      console.log(e);
      let value = prompt('请输入标签名')
      let newId = this.createdId();
      let nameList = this.tags.map(e => e.name);
      if (value){
        if(nameList.includes(value)){
          alert("标签名重复了")
        }else{
          let newTag:TagsItem ={
            name:value,
            id:newId
          }
          this.tags.push(newTag)
        }
      }
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