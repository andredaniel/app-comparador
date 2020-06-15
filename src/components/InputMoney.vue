<template>
  <div>
    <input
      :placeholder="placeholder"
      class="input-money-text form-control form-control-lg"
      ref="input"
      type="text"
      v-bind="$attrs"
      v-currency="options"
      v-model="formatedInputValue"
    />
    <b-form-invalid-feedback :state="inputValue !== ''">
      Por favor, informe um valor.
    </b-form-invalid-feedback>
    <b-form-input
      :max="100000"
      :min="options.valueRange.min"
      class="mt-5 mb-3"
      type="range"
      v-model="inputValue"
    ></b-form-input>
  </div>
</template>

<script>
  import {
    CurrencyDirective,
    setValue,
    parseCurrency,
  } from 'vue-currency-input'

  export default {
    inheritAttrs: true,
    props: ['placeholder', 'value'],
    directives: {
      currency: CurrencyDirective,
    },
    watch: {
      inputValue(newValue) {
        this.$emit('input', newValue)
        setValue(this.$refs.input, newValue)
      },
      formatedInputValue(newValue) {
        const value = parseCurrency(newValue, this.options)
        this.inputValue = value
        this.$emit('input', value)
      },
    },
    data() {
      return {
        formatedInputValue: this.value,
        inputValue: this.value,
        options: {
          currency: 'BRL',
          locale: 'pt-br',
          distractionFree: false,
          valueRange: {
            min: 100,
            max: 1000000,
          },
          allowNegative: false,
          autoDecimalMode: true,
          valueAsInteger: true,
          precision: 0,
        },
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/imports';

  .input-money-text,
  .input-money-text:focus {
    font-size: 1.5rem;
    text-align: center;
    color: $brand-orange;
  }
</style>
