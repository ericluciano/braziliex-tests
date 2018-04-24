import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import IconTimer from './iconTimer';
import IconChangeCripto from './iconChangeCripto';
import Logo from './logo';

import { changeCripto } from '../../reducers/criptoActions';

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(

        <div className="col-xs-12">
          {/* <IconTimer /> */}
          <IconChangeCripto />
          <div className="preLogo" onClick={() => this.props.changeCripto(this.props.moedaAtual)}>
            <Logo nome={this.props.moedaLogo} />
          </div>
        </div>

    )
  }
}
const mapStateToProps = state => ({
  moedaAtual: state.cripto.moedaAtual
});

const mapDispatchToProps = dispatch =>
bindActionCreators({ changeCripto }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
