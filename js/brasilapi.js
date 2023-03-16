'use strict'

export const pesquisarCepBrasilApi = async (cepPesquisado) => {
    const url = `https://brasilapi.com.br/api/cep/v2/${cepPesquisado}`
    const response = await fetch(url)
    const data = await response.json()

    return {
        logradouro: data.street,
        bairro: data.neighborhood,
        municipio: data.city,
        estado: data.state
    }
}

