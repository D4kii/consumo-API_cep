'use strict'

export const pesquisarCepViaCep = async (cepPesquisado) => {
    const url = `https://viacep.com.br/ws/${cepPesquisado}/json/`
    const response = await fetch(url)
    const data = await response.json()

    return {
        logradouro: data.logradouro,
        bairro: data.bairro,
        municipio: data.localidade,
        estado: data.uf
    }
}



