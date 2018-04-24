import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeCripto, tabsNavegarPara } from '../../reducers/criptoActions';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  callOrNotReloadHistorico(props) {
    if (props) {
      this.props.changeCripto(this.props.moedaAtual);
    }
  }

  render() {
    return (
      <button class={`tablinks ${this.props.active}`} onClick={() => {
        this.props.tabsNavegarPara(this.props.action)
        this.callOrNotReloadHistorico(this.props.mark)
      } }>
        {this.props.tabTitle}
      </button>
    )
  }
}

const mapStateToProps = state => ({
  moedaAtual: state.cripto.moedaAtual
});
const mapDispatchToProps = dispatch =>
bindActionCreators({ changeCripto, tabsNavegarPara }, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Buttons);
