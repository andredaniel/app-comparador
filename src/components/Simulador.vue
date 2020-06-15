<template>
  <div class="simulador-wrapper pb-5 pb-md-0">
    <b-card header="Simulador" class="card-wrapper">
      <b-form-group label="De quanto você precisa?" label-for="value">
        <InputMoney
          id="value"
          size="lg"
          v-model="$store.state.valorEmprestimo"
        />
      </b-form-group>

      <b-form-group>
        <template v-slot:label>
          <label for="instituicoes">
            Instituições
            <span class="text-muted small ml-2">OPCIONAL</span>
          </label>
        </template>
        <multi-select
          :options="$store.state.instituicoes"
          id="instituicoes"
          v-model="$store.state.instituicoesSelecionadas"
        ></multi-select>
      </b-form-group>

      <b-form-group>
        <template v-slot:label>
          <label for="convenios">
            Convênios
            <span class="text-muted small ml-2">OPCIONAL</span>
          </label>
        </template>
        <multi-select
          :options="$store.state.convenios"
          id="convenios"
          v-model="$store.state.conveniosSelecionados"
        ></multi-select>
      </b-form-group>

      <b-form-group>
        <template v-slot:label>
          <label for="parcelas">
            Parcelas
            <span class="text-muted small ml-2">OPCIONAL</span>
          </label>
        </template>
        <multiselect
          :allow-empty="true"
          :close-on-select="true"
          :options="opcoesParcelas"
          :searchable="false"
          :show-labels="true"
          deselect-label="Remover"
          id="parcelas"
          placeholder="Selecione"
          select-label="Adicionar"
          v-model="$store.state.quantidadeParcelas"
        ></multiselect>
      </b-form-group>

      <b-button
        :disabled="!$store.state.valorEmprestimo"
        :variant="$store.state.valorEmprestimo ? 'primary' : 'secondary'"
        @click="enviarSimulacao"
        size="lg"
        block
      >
        Simular
      </b-button>
    </b-card>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect'
  import InputMoney from '@/components/InputMoney'
  import MultiSelect from '@/components/MultiSelect'
  import opcoesParcelas from '@/data/available-installments'

  export default {
    components: {
      InputMoney,
      MultiSelect,
      Multiselect,
    },
    data() {
      return {
        opcoesParcelas: opcoesParcelas.map((item) => `${item} parcelas`),
      }
    },
    methods: {
      async enviarSimulacao() {
        await this.$store.commit('enviarSimulacao')
        this.$router.push('/resultados')
      },
    },
    created() {
      this.$store.dispatch('init')
    },
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/imports';

  .simulador-wrapper {
    @include media-breakpoint-up(md) {
      padding: 2rem 0;
    }
  }

  .small {
    font-size: 0.7em;
    letter-spacing: 1px;
  }

  .card-wrapper {
    border: none;
  }

  label {
    margin-bottom: 0;
  }
</style>
