const INITIAL_STATE = {
  loading: true,
  moedaAtual: 'ripple',
  modalChangeCripto: 'inactive',
  dataMercado: [],
  dataHistorico: [],
  barTopActive: 'inactive',
  tabs: {
    active: 'historico'
  },
  errorMessage: '',
  currencies: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case 'LOADING':
      return { ...state, loading: action.payload }

    case 'CHANGE_CRIPTO':
      return { ...state,
        moedaAtual: action.payload,
        tabs: { active: 'historico' }
      }

    case 'CLOSE_OR_OPEN_MODAL_CHANGE_CRIPTO':
      return { ...state, modalChangeCripto: action.payload }

    case 'BAR_TOP_STATUS':
      return { ...state, barTopActive: action.payload }

    case 'API_CALL_MERCADO':
      return { ...state, dataMercado: action.payload }

    case 'API_CALL_HISTORICO':
      return { ...state, dataHistorico: action.payload }

    case 'API_CALL_CURRENCIES':
      return { ...state, currencies: action.payload }

    case 'CHANGE_TABS':
      return { ...state, tabs: action.payload }

    case 'API_ERROR':
      return { ...state, errorMessage: action.payload }

    default:
      return state;
  }
}
