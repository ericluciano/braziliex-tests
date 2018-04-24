import React from 'react';
import { connect } from 'react-redux';

import Buttons from './buttons';

//tabs
import NegociacaoTab from './negociacaoTab';
import MercadoTab from './mercadoTab';
import CurrenciesTab from './currenciesTab';


class Tabs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { active } = this.props.tabs;

    const tabHistorico = active === 'historico' ? 'active' : '';
    const tabMercado = active === 'mercado' ? 'active' : '';
    const tabCurrencies = active === 'currencies' ? 'active' : '';
    return (
      <div>

        <div className="tab">
          <Buttons action='historico' tabTitle='Negociações' active={tabHistorico} mark={true} />
          <Buttons action='currencies' tabTitle='Braziliex' active={tabCurrencies} mark={false} />
          <Buttons action='mercado' tabTitle='Investing' active={tabMercado} mark={false} />
        </div>

        <NegociacaoTab status={tabHistorico} />
        <MercadoTab status={tabMercado} />
        <CurrenciesTab status={tabCurrencies} />

      </div>
    )
  }
}

const mapStateToProps = state => ({
  tabs: { active: state.cripto.tabs.active }
});


export default connect(mapStateToProps)(Tabs);
