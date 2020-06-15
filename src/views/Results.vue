<template>
  <div class="container">
    <div v-if="$store.state.resultsLoaded">
      <div v-if="$store.state.simulacao.length > 0">
        <b-row class="align-items-end py-5">
          <b-col>
            <h1 class="title">
              Verifique as opções que encontramos para você:
            </h1>
            <p class="text-light mb-0">
              Resultados para um empréstimo no valor de
              <strong>{{ formatMoney($store.state.valorEmprestimo) }}</strong>
            </p>
          </b-col>
          <b-col md="auto">
            <b-btn
              variant="light"
              @click="$router.push('/')"
              class="mt-4 mt-md-0"
            >
              Refazer simulação
            </b-btn>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            :key="key"
            lg="3"
            md="4"
            sm="6"
            v-for="(simulacao, key) in $store.state.simulacao"
          >
            <b-card
              class="mb-4 border-0"
              :title="
                `${simulacao.parcelas}x de ${formatMoney(
                  simulacao.valor_parcela
                )}`
              "
              :sub-title="`${simulacao.taxa}% ao mês`"
            >
              <template v-slot:header>
                <div class="d-flex align-items-center justify-content-between">
                  <div>
                    <h6 class="mb-0">{{ simulacao.instituicao }}</h6>
                    <div class="text-muted small">{{ simulacao.convenio }}</div>
                  </div>
                  <b-badge variant="success" v-if="key === 0 ? 'success' : ''">
                    Melhor opção
                  </b-badge>
                </div>
              </template>
              <b-card-text>
                <p class="mb-0 text-muted small mt-4">
                  Total: {{ formatMoney(simulacao.total) }}
                </p>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </div>
      <div class="text-center text-light py-5" v-else>
        <h2 class="my-5">
          Não encontramos nenhuma linha de crédito baseado nas suas
          especificações.
        </h2>
        <b-btn variant="light" @click="$router.push('/')" class="mt-4 mt-md-0">
          Refazer simulação
        </b-btn>
      </div>
    </div>
    <div class="text-center text-light py-5" v-else>
      <b-spinner label="Loading..."></b-spinner>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Results',
    components: {},
    methods: {
      formatMoney(money) {
        return money.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      },
    },
    created() {
      if (this.$store.state.resultsLoaded === null) {
        this.$router.push('/')
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/imports';

  h4.card-title {
    color: $brand-orange;
  }

  .title {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 100;
    line-height: 1em;
    margin-top: 0;

    @include media-breakpoint-up(md) {
      font-size: 2rem;
      text-align: left;
    }
  }
</style>
