import React, { Component } from 'react';

//import axios from 'axios';

//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeCripto, closeOrOpenModalCripto, callApiMercado, callApiHistorico, checkLoading, callApiCurrencies } from './reducers/criptoActions';

// components
import BarTop from './components/barTop';
import Header from './components/header/header';
import ChangeCripto from './components/changeCripto/changeCripto';
import BarInfo from './components/barInfo/barInfo';
import Tabs from './components/tabs/tabs';

// //api
// import { apiTrade, apiMercado } from './constantes/api';
//
// //constantes
// import { moedas } from './constantes/moedas';

// utils
import { formatCurrencyToBr } from './utils/utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempo: 60000
    };

  }
  call() {
    this.props.checkLoading(true);
    this.props.callApiMercado(this.props.moedaAtual);
    this.props.callApiHistorico(this.props.moedaAtual);
    this.props.callApiCurrencies();
  }
  componentWillMount() {
      this.call();
  }

  componentDidMount() {
    setInterval(() => {
      this.call()
    },this.state.tempo)
  }

  getCompra(type) {

    const dados = this.props.dataHistorico;

    let i = 0;
    let totalCompra = parseFloat(0);
    let totalVenda = parseFloat(0);

    dados.forEach((f) => {
      if(f.type === "buy") {
        i = i+1;
        totalCompra = totalCompra + Number(f.total);
      }
      totalVenda = totalVenda + Number(f.total);
    })

    const items = {
      buy: i,
      sell: 100 - i,
      total: 100,
      totalCompra: formatCurrencyToBr(totalCompra),
      totalVenda: formatCurrencyToBr(totalVenda),
      totalGeral: formatCurrencyToBr(totalVenda + totalCompra)
    };

    return items[type];

  }

  renderBarTop(v) {

    const barTop = {
          uc: formatCurrencyToBr(v.dataMercado.last || 0),
          cma: formatCurrencyToBr(v.dataMercado.highestBid24 || 0),
          cmb: formatCurrencyToBr(v.dataMercado.lowestAsk24 || 0),
          volume: formatCurrencyToBr(v.dataMercado.quoteVolume24 || 0),
          active: v.barTopActive
        };

    return(
      <BarTop uc={barTop.uc} cma={barTop.cma} cmb={barTop.cmb} volume={barTop.volume} active={barTop.active} />
    )
  }

  load() {

    const load = this.props.loading === true ? 'active': 'inactive';

    return(
      <div class={`loading ${load}`}>
        <div className="spinner"></div>
        <div className="message">{this.props.errorMessage}</div>
      </div>
    )
  }

  render() {

    return (
      <div className="container-fluid">

        {this.load()}
        {this.renderBarTop(this.props)}
        <div className="row">
          <Header moedaLogo={this.props.moedaAtual} />
        </div>

        <div className="row">
        <div className="col-xs-12">

          <BarInfo compra={this.getCompra('buy')} venda={this.getCompra('sell')} total={this.getCompra('total')} totalCompra={this.getCompra('totalCompra')} totalVenda={this.getCompra('totalVenda')} totalMontante={this.getCompra('totalGeral')} />
          <Tabs />
        </div>
        </div>
        <ChangeCripto />

      </div>
    );
  }
}
const mapStateToProps = state => ({
  moedaAtual: state.cripto.moedaAtual,
  modalChangeCripto: state.cripto.modalChangeCripto,
  dataMercado: state.cripto.dataMercado,
  dataHistorico: state.cripto.dataHistorico,
  loading: state.cripto.loading,
  barTopActive: state.cripto.barTopActive,
  errorMessage: state.cripto.errorMessage,
  currencies: state.cripto.currencies,
});

const mapDispatchToProps = dispatch =>
bindActionCreators({ changeCripto, closeOrOpenModalCripto, callApiMercado, callApiHistorico, checkLoading, callApiCurrencies  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
