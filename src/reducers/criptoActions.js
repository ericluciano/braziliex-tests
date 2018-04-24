//api
import { urlApiHistorico, urlApiMercado, urlApiCurrencies } from '../constantes/api';

//constantes
import { moedas } from '../constantes/moedas';

//axios
import axios from 'axios';

export const checkLoading = event => ({
    type: 'LOADING',
    payload: event
});

export const changeCripto = event => ([
  { type: 'CHANGE_CRIPTO',
    payload: event
  },
  checkLoading(true),
  barTopStatus('inactive'),
  callApiMercado(event),
  callApiHistorico(event),
  closeOrOpenModalCripto('inactive')
]);

export const closeOrOpenModalCripto = (event) => ([
  {
    type: 'CLOSE_OR_OPEN_MODAL_CHANGE_CRIPTO',
    payload: event
  }
]);

export const barTopStatus = event => ({
  type: 'BAR_TOP_STATUS',
  payload: event
});

export const callApiMercado = (moeda) => {
  return (dispatch) => {
    const moedaSigla = moedas[moeda].sigla;
    const apiCallMercado = `${urlApiMercado}${moedaSigla}`;

    axios.get(apiCallMercado)
         .then(resp => dispatch({
           type: 'API_CALL_MERCADO',
           payload: resp.data
         }))
         .then(resp => dispatch(
           barTopStatus('active')
         ))
         .catch(error => dispatch(
           errorApi('Erro ao processar API')
         ))
  }
}

export const callApiHistorico = (moeda) => {
  return (dispatch) => {
    const moedaSigla = moedas[moeda].sigla;
    const apiCallHistorico = `${urlApiHistorico}${moedaSigla}`;

    axios.get(apiCallHistorico)
         .then(resp => dispatch({
           type: 'API_CALL_HISTORICO',
           payload: resp.data
         }))
         .then(resp => dispatch(
           checkLoading(false)
         ))
  }

}

export const callApiCurrencies = () => {
  return (dispatch) => {

    const apiURL = `${urlApiCurrencies}`;

    axios.get(apiURL)
         .then(resp => dispatch({
           type: 'API_CALL_CURRENCIES',
           payload: resp.data
         }))
  }

}

export const tabsNavegarPara = (event) => ({
    type: 'CHANGE_TABS',
    payload: {active: event}
});

export const errorApi = (event) => ({
    type: 'API_ERROR',
    payload: event
});
