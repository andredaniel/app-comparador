<template>
  <div class="d-flex align-items-center">
    <div class="container">
      <b-row align-v="center">
        <b-col md="7">
          <h1 class="title">
            Seu Crédito
            <br />
            <strong>ficou bem melhor</strong>
          </h1>
        </b-col>
        <b-col md="5">
          <Simulador />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
  import Simulador from '@/components/Simulador'

  export default {
    name: 'Home',
    components: {
      Simulador,
    },
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/imports';

  .title {
    color: #fff;
    font-size: 2rem;
    font-weight: 100;
    line-height: 1em;
    margin: 3rem 0;
    text-align: center;
    text-transform: uppercase;

    strong {
      font-weight: bold;
    }

    @include media-breakpoint-up(md) {
      font-size: 3rem;
      text-align: left;
    }
  }
</style>
