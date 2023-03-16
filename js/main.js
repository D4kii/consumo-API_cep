'use strict'

import { pesquisarCepViaCep } from "./viacep.js"
import { pesquisarCepPostmon } from "./postmon.js"
import { pesquisarCepBrasilApi } from "./brasilapi.js"


const preencherFormulario = async () => {

    const cepDigitado = document.getElementById('cep').value;
    const cep = await pesquisarCepBrasilApi(cepDigitado)

    if (isNaN(cepDigitado)) {

        alert('Por favor, escreva somente números na lacuna do CEP')

    }else if(cepDigitado == undefined){

        alert('Preencha a lacuna CEP, por favor')

    }else{

    document.getElementById('endereco').value = cep.logradouro
    document.getElementById('bairro').value = cep.bairro
    document.getElementById('cidade').value = cep.municipio
    document.getElementById('estado').value = cep.estado

    }
    
}

document.getElementById('cep')
        .addEventListener('blur', preencherFormulario)