import React from 'react';
import { connect } from 'react-redux';

import Moment from 'react-moment';
import 'moment/locale/pt-br';

import BuySellLabel from './buySellLabel';

import { formatCurrencyToBr } from '../../utils/utils';

class NegociacaoTab extends React.Component {

  constructor(props) {
    super(props);
  }

  mountTableTd(props) {
      const items = props || [];

      const it = Object.values(items).map((i, v) => {
        return (
          <td key={v}>{i}</td>
        )
      });
      return it;

    }


  processMountData(props) {
    const data = props || [];
    const items = data.map((i, ins) => {
          let amount = i['amount'];
              amount = parseFloat(amount).toFixed(2);
          return (
            <tr key={i['_id']}>
              {this.mountTableTd({
                data: <Moment locale="pt-br" format="DD MMM HH:mm">{i['date_exec']}</Moment>,
                amount: amount,
                tipo: <BuySellLabel tipo={i['type']} />,
                preco: formatCurrencyToBr(i['price']),
                total: formatCurrencyToBr(i['total'])
                })
              }
            </tr>
          )
        });

    return items;
  }

  render() {
    return (
      <div id="historicoTabContent" className={`tabcontent ${this.props.status}`}>
      <div className="table-responsive">
      <table className="table table-bordered table-striped trade">
        <thead>
          <tr>
            <th>data</th>
            <th>qtd</th>
            <th>tipo</th>
            <th>preço</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>
          {this.processMountData(this.props.dataHistorico)}
        </tbody>
      </table>
      </div>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  dataHistorico: state.cripto.dataHistorico
});

export default connect(mapStateToProps)(NegociacaoTab);
