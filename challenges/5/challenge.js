/*
 * Requisição na API e componente de Loading
 */

/* ENUNCIADO
 *
 * Neste exercício você deverá escrever  uma função que faz
 * uma requisição para nossa API. Em uma aplicação real,
 * essa função seria chamada no início da renderização de
 * uma página web.
 * Como se trata de um fluxo assíncrono, é necessário que
 * o usuário saiba que esses dados estão sendo carregados,
 * para tanto você deve ativar uma componente de
 * "Carregando" através da função setLoading.
 *
 * Para usar essa função basta chamar em seu código:
 * setLoading(true), para abrir essa componente e
 * setLoading(false), para fechá-la.
 *
 * Uma vez que você obtiver os dados, você deve armazená-
 * los através de uma função setData.
 *
 * Em caso de erro, você deve abrir uma componente de
 * erro, através da função setError, que funciona analoga-
 * mente à função de loading.
 *
 * Para fazer a request, use nossa função chamada api, na
 * forma api().then()...
 *
 */

const { setData, setError, setLoading } = require('../../utils/stateHandlers')
const api = require('../../utils/api') // Promise

const doRequest = () => {}

module.exports = doRequest
