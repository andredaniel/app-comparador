import axios from 'axios'

export class Emprestimo {
  baseUrl = `http://127.0.0.1:8000/api`
  getInstituicoes() {
    return axios
      .get(`${this.baseUrl}/instituicao`)
      .then(({ data }) => {
        return data
      })
      .catch(({ response }) => {
        return response.data
      })
  }

  async getConvenios() {
    return await axios
      .get(`${this.baseUrl}/convenio`)
      .then(({ data }) => {
        return data
      })
      .catch(({ response }) => {
        return response.data
      })
  }

  async enviarSimulacao(details) {
    return await axios
      .post(`${this.baseUrl}/simular`, details)
      .then(({ data }) => {
        return Object.keys(data)
          .reduce((acc, key) => {
            data[key].map((simulacao) => {
              acc.push({
                instituicao: key,
                ...simulacao,
                total: Number(simulacao.parcelas * simulacao.valor_parcela),
              })
            })
            return acc
          }, [])
          .sort((a, b) => {
            return a.total - b.total
          })
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data)
          return error.response.data
        } else {
          console.log(error.message)
        }
      })
  }
}
