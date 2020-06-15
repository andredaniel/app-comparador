<template>
  <div id="app">
    <router-view class="routes" />
  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss" scoped>
  @import 'assets/scss/imports';

  #app {
    background-image: url('assets/images/elderly-woman.jpg');
    background-position: 0 20%;
    background-size: cover;
    min-height: 100vh;
    position: relative;
    z-index: 0;

    &:after {
      background-color: $brand-blue;
      background-image: url('assets/images/bg-pag-porque-empresta.png');
      background-size: cover;
      content: '';
      height: 100%;
      left: 0;
      opacity: 0.8;
      position: absolute;
      top: 0;
      width: 100%;
    }

    > .routes {
      position: relative;
      z-index: 1;
    }
  }
</style>
