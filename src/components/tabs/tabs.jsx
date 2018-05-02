import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Buttons from './buttons';

// tabs
import NegociacaoTab from './negociacaoTab';
import InvestingTab from './investingTab';
import BraziliexTab from './braziliexTab';


class Tabs extends React.PureComponent {
  render() {
    const { active } = this.props.tabs;

    const tabHistorico = active === 'historico' ? 'active' : '';
    const tabInvesting = active === 'investing' ? 'active' : '';
    const tabBraziliex = active === 'braziliex' ? 'active' : '';
    return (
      <div>

        <div className="tab">
          <Buttons action="historico" tabTitle="Negociações" active={tabHistorico} mark />
          <Buttons action="braziliex" tabTitle="Braziliex" active={tabBraziliex} mark={false} />
          <Buttons action="investing" tabTitle="Investing" active={tabInvesting} mark={false} />
        </div>

        <NegociacaoTab status={tabHistorico} />
        <InvestingTab status={tabInvesting} />
        <BraziliexTab status={tabBraziliex} />

      </div>
    );
  }
}

const mapStateToProps = state => ({
  tabs: { active: state.cripto.tabs.active },
});

Tabs.defaultProps = {
  tabs: { active: 'historico' },
};

Tabs.propTypes = {
  tabs: PropTypes.instanceOf(Object),
};

export default connect(mapStateToProps)(Tabs);
