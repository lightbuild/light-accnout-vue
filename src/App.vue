<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<style lang="scss">
  @import "~@/assets/style/reset.scss";
  @import "~@/assets/style/helper.scss";
  
  #app {
    font-family: $font-hei;
    font-size:14px;
    line-height: 22px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  

</style>
