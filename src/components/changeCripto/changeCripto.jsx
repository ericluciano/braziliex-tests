import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeCripto, closeOrOpenModalCripto } from '../../reducers/criptoActions';

import { moedas } from '../../constantes/moedas';
import { capitalize } from '../../utils/utils';

class ChangeCripto extends React.Component{
  constructor(props) {
    super(props);
  }

  mountLi(props) {
    const moedas = props || [];
    const items = Object.keys(moedas).sort();
    return items.map(moeda => (
        <li>
          <div className='link' onClick={() => this.props.changeCripto(moeda)}>
            {capitalize(moeda)}
          </div>
        </li>
      )
    )
  }

  render() {

    const { modalChangeCripto } = this.props;

    return(
      <div>
        <div className={`crypto-change ${modalChangeCripto}`}>
          <div className="close-change" onClick={() => this.props.closeOrOpenModalCripto('inactive')}>X</div>
          <div className="content">
            <ul>
              {/* <li><div className='link' onClick={() => this.props.changeCripto('ripple')}>Ripple</div></li>
              <li><div className='link' onClick={() => this.props.changeCripto('singular')}>Singular DTV</div></li>
              <li><div className='link' onClick={() => this.props.changeCripto('tron')}>Tron</div></li> */}
              {this.mountLi(moedas)}
            </ul>
          </div>
        </div>
        <div className={`source-frame ${modalChangeCripto}`}></div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  moedaAtual: state.cripto.moedaAtual,
  modalChangeCripto: state.cripto.modalChangeCripto });

const mapDispatchToProps = dispatch =>
bindActionCreators({ changeCripto, closeOrOpenModalCripto }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChangeCripto);
