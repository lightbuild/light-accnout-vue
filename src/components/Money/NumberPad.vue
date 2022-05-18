<template>
  <div class="number-pad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="updateInput">1</button>
      <button @click="updateInput">2</button>
      <button @click="updateInput">3</button>
      <button @click="remove" class="delete">删除</button>
      <button @click="updateInput">4</button>
      <button @click="updateInput">5</button>
      <button @click="updateInput">6</button>
      <button @click="clear" class="clear">清空</button>
      <button @click="updateInput">7</button>
      <button @click="updateInput">8</button>
      <button @click="updateInput">9</button>
      <button @click="ok" class="ok">OK</button>
      <button @click="updateInput" class="zero">0</button>
      <button @click="updateInput">.</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  
  @Component
  export default class NumberPad extends Vue {
    @Prop(Number) oldNumber!: number;
    output = this.oldNumber.toString();
    
    updateInput(event: MouseEvent): void {
      const target = event.target as HTMLButtonElement;
      const value = target.textContent!;
      if (this.output.length > 16) {return;}
      if (this.output === '0') {
        if ('0123456789'.indexOf(value) >= 0) {
          this.output = value;
        } else {
          this.output += value;
        }
        return;
      }
      if (this.output.indexOf('.') >= 0 && value === '.') {return;}
      this.output += value;
    }
    
    remove(): void {
      if (this.output.length === 1) {
        this.output = '0';
      } else {
        this.output = this.output.slice(0, -1);
      }
    }
    
    clear(): void {
      this.output = '0';
    }
    
    ok(): void {
      const newNumber = parseFloat(this.output);
      this.$emit('update:oldNumber', newNumber);
      this.$emit('submit')
      this.output = '0'
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  
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
        
        $bg: #f2f2f2;
        
        &:nth-child(1) {
          background: $bg;
        }
        
        &:nth-child(2), &:nth-child(5) {
          background: darken($bg, 4%);
        }
        
        &:nth-child(3), &:nth-child(6), &:nth-child(9) {
          background: darken($bg, 8%);
        }
        
        &:nth-child(4), &:nth-child(7), &:nth-child(10) {
          background: darken($bg, 12%);
        }
        
        &:nth-child(8), &:nth-child(11), &:nth-child(13) {
          background: darken($bg, 16%);
        }
        
        &:nth-child(14) {
          background: darken($bg, 20%);
        }
        
        &:nth-child(12) {
          background: darken($bg, 24%);
        }
      }
    }
  }
</style>