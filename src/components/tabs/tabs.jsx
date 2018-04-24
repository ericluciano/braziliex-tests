import React from 'react';
import { connect } from 'react-redux';

import Buttons from './buttons';

//tabs
import NegociacaoTab from './negociacaoTab';
import InvestingTab from './investingTab';
import BraziliexTab from './braziliexTab';


class Tabs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { active } = this.props.tabs;

    const tabHistorico = active === 'historico' ? 'active' : '';
    const tabInvesting = active === 'investing' ? 'active' : '';
    const tabBraziliex = active === 'braziliex' ? 'active' : '';
    return (
      <div>

        <div className="tab">
          <Buttons action='historico' tabTitle='Negociações' active={tabHistorico} mark={true} />
          <Buttons action='braziliex' tabTitle='Braziliex' active={tabBraziliex} mark={false} />
          <Buttons action='investing' tabTitle='Investing' active={tabInvesting} mark={false} />
        </div>

        <NegociacaoTab status={tabHistorico} />
        <InvestingTab status={tabInvesting} />
        <BraziliexTab status={tabBraziliex} />

      </div>
    )
  }
}

const mapStateToProps = state => ({
  tabs: { active: state.cripto.tabs.active }
});


export default connect(mapStateToProps)(Tabs);
