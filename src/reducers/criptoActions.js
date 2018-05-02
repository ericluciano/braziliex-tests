/* eslint no-use-before-define: "error" */
/* eslint-env es6 */

// axios
import axios from 'axios';

// api
import { urlApiHistorico, urlApiMercado, urlApiCurrencies } from '../constantes/api';

// constantes
import { moedas } from '../constantes/moedas';


const checkLoading = event => ({
  type: 'LOADING',
  payload: event,
});

const closeOrOpenModalCripto = event => ([
  {
    type: 'CLOSE_OR_OPEN_MODAL_CHANGE_CRIPTO',
    payload: event,
  },
]);

const barTopStatus = event => ({
  type: 'BAR_TOP_STATUS',
  payload: event,
});

const errorApi = event => ({
  type: 'API_ERROR',
  payload: event,
});

const callApiMercado = moeda =>
  (dispatch) => {
    const moedaSigla = moedas[moeda].sigla;
    const apiCallMercado = `${urlApiMercado}${moedaSigla}`;

    axios.get(apiCallMercado)
      .then(resp => dispatch({
        type: 'API_CALL_MERCADO',
        payload: resp.data,
      }))
      .then(() => dispatch(barTopStatus('active')))
      .catch(error =>
        dispatch(errorApi(`${error.responseText}`)));
  };


const callApiHistorico = moeda =>
  (dispatch) => {
    const moedaSigla = moedas[moeda].sigla;
    const apiCallHistorico = `${urlApiHistorico}${moedaSigla}`;

    axios.get(apiCallHistorico)
      .then(resp => dispatch({
        type: 'API_CALL_HISTORICO',
        payload: resp.data,
      }))
      .then(() => dispatch(checkLoading(false)));
  };


const callApiCurrencies = () =>
  (dispatch) => {
    const apiURL = `${urlApiCurrencies}`;
    axios.get(apiURL)
      .then(resp => dispatch({
        type: 'API_CALL_CURRENCIES',
        payload: resp.data,
      }));
  };


const tabsNavegarPara = event => ({
  type: 'CHANGE_TABS',
  payload: {
    active: event,
  },
});

const changeCripto = event => ([
  {
    type: 'CHANGE_CRIPTO',
    payload: event,
  },
  checkLoading(true),
  barTopStatus('inactive'),
  callApiMercado(event),
  callApiHistorico(event),
  closeOrOpenModalCripto('inactive'),
]);

export {
  checkLoading, changeCripto, closeOrOpenModalCripto,
  barTopStatus, callApiMercado, callApiHistorico,
  callApiCurrencies, tabsNavegarPara, errorApi,
};
