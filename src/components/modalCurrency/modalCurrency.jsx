import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeCripto, closeOrOpenModalCripto } from '../../reducers/criptoActions';

import { moedas } from '../../constantes/moedas';
import { capitalize } from '../../utils/utils';

class ModalCurrency extends React.Component{
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
        <div className={`modal-currency ${modalChangeCripto}`}>
          <div className={`close ${modalChangeCripto}`} onClick={() => this.props.closeOrOpenModalCripto('inactive')}>X</div>
          <div className="content">
            <ul>
              {this.mountLi(moedas)}
            </ul>
          </div>
        </div>
        <div className={`bg-modal-currency ${modalChangeCripto}`}></div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  moedaAtual: state.cripto.moedaAtual,
  modalChangeCripto: state.cripto.modalChangeCripto });

const mapDispatchToProps = dispatch =>
bindActionCreators({ changeCripto, closeOrOpenModalCripto }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalCurrency);
