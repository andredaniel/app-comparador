<template>
  <multiselect
    :clear-on-select="false"
    :close-on-select="false"
    :loading="options.length === 0"
    :multiple="true"
    :options="selectOptions"
    :preselect-first="false"
    :searchable="false"
    :showLabels="false"
    label="valor"
    placeholder="Selecione"
    track-by="chave"
    v-bind="$attrs"
    v-model="selectedItems"
  />
</template>

<script>
  import Multiselect from 'vue-multiselect'

  export default {
    components: {
      Multiselect,
    },
    props: ['value', 'options'],
    data() {
      return {
        selectOptions: this.options,
        selectedItems: this.value,
      }
    },
    watch: {
      selectedItems(newValue) {
        this.$emit('input', newValue)
      },
      options(newValue) {
        this.selectOptions = newValue
      },
    },
  }
</script>
