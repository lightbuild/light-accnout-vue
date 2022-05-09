<template>
  <layout>
    <div>
      <div class="tags">
        <ul class="container">
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>出</li>
        </ul>
        <div class="button-new">
          <button>新增标签</button>
        </div>
      </div>
      <div class="form-item">
        <label>
          <span class="name">备注</span>
          <input type="text" placeholder="在这里可以为标签添加备注">
        </label>
      </div>
      <div class="tabs">
        <ul class="container">
          <li class="selected">支出</li>
          <li>收入</li>
        </ul>
      </div>
      <div class="number-pad">
        <div class="output">100</div>
        <div class="buttons">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button class="ok">OK</button>
          <button class="zero">0</button>
          <button>.</button>
        </div>
      </div>
    </div>
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
  
  }
</script>

<style lang="scss" scoped>
  @use "sass:math";
  @import "~@/assets/style/reset.scss";
  @import "~@/assets/style/helper.scss";
  
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
      }
    }
    
    > .button-new {
      margin-top: 10px;
      
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
  
  .form-item {
    padding-top: 25px;
    padding-bottom: 26px;
    background: #e5e5e5;
    display: flex;
    padding-left: 16px;
    align-items: center;
    
    .name {
      padding-right: 16px;
    }
    
    input {
      border: none;
      height: 40px;
      background: transparent;
    }
  }
  
  .tabs {
    .container {
      background: #c4c4c4;
      display: flex;
      justify-content: center;
      align-items: center;
      
      li {
        width: 50%;
        height: 64px;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        
        &.selected {
          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: #333;
          }
        }
      }
      
    }
    
  }
  
  .number-pad {
    .output {
      @extend %innerShadow;
      @extend %clearFix;
      font-family: Consolas, monospace;
      text-align: right;
      font-size: 36px;
      padding: 9px 16px;
      min-height: 72px;
      line-height: 72px;
    }
    
    .buttons {
      @extend %clearFix;
      > button {
        border: none;
        background: transparent;
        float: left;
        width: 25%;
        height: 64px;
        
        &.ok {
          height: 64*2px;
          float: right;
        }
        
        &.zero {
          width: 25*2%;
        }
        
        $bg:#f2f2f2;
        
        &:nth-child(1){
          background: $bg;
        }
        
        &:nth-child(2),&:nth-child(5){
          background: darken($bg,4%);
        }
        
        &:nth-child(3),&:nth-child(6),&:nth-child(9){
          background: darken($bg,8%);
        }
        &:nth-child(4),&:nth-child(7),&:nth-child(10){
          background: darken($bg,12%);
        }
        &:nth-child(8),&:nth-child(11),&:nth-child(13){
          background: darken($bg,16%);
        }
        
        &:nth-child(14) {
          background: darken($bg,20%);
        }
        
        &:nth-child(12) {
          background: darken($bg,24%);
      }
      }
    }
  }
</style>