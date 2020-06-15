import Vue from 'vue'
import Vuex from 'vuex'
import { Emprestimo } from '@/services/emprestimo.service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    convenios: [],
    conveniosSelecionados: [],
    instituicoes: [],
    instituicoesSelecionadas: [],
    quantidadeParcelas: null,
    simulacao: [],
    valorEmprestimo: 100,
    resultsLoaded: null,
  },
  mutations: {
    async getConvenios(state) {
      const emprestimo = new Emprestimo()
      state.convenios = await emprestimo.getConvenios()
    },
    async getInstituicoes(state) {
      const emprestimo = new Emprestimo()
      state.instituicoes = await emprestimo.getInstituicoes()
    },
    async enviarSimulacao(state) {
      const emprestimo = new Emprestimo()
      state.simulacao = await emprestimo.enviarSimulacao({
        instituicoes: state.instituicoesSelecionadas.map((item) => item.chave),
        valor_emprestimo: state.valorEmprestimo,
        convenios: state.conveniosSelecionados.map((item) => item.chave),
        parcelas: state.quantidadeParcelas,
      })
      state.resultsLoaded = true
    },
  },
  actions: {
    init({ commit }) {
      commit('getConvenios')
      commit('getInstituicoes')
    },
  },
  modules: {},
})
