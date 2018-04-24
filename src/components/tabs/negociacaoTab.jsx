import React from 'react';
import { connect } from 'react-redux';

import Moment from 'react-moment';
import 'moment/locale/pt-br';

import BuySellLabel from './buySellLabel';

import { formatCurrencyToBr } from '../../utils/utils';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class NegociacaoTab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        sorted: [
              {
                id: "data",
                desc: false
              }
            ]
    };
  }
  processMountData(props) {
    const data = props || [];
    const items = data.map(i => {
          let amount = i['amount'];
              amount = parseFloat(amount).toFixed(4);
          return {
            _id: i['_id'],
            data: <Moment locale="pt-br" format="DD MMM HH:mm">{i['date_exec']}</Moment>,
            amount: amount,
            tipo: <BuySellLabel tipo={i['type']} />,
            preco: formatCurrencyToBr(i['price']),
            total: formatCurrencyToBr(i['total'])
          }

        });

    return items;
  }

  mountTable() {
    return (
      <ReactTable
        data={this.processMountData(this.props.dataHistorico)}
        columns={[{
          Header: "data",
          accessor: "data"
        },
        {
          Header: "qtd",
          id: "amount",
          accessor: d => d.amount
        },
        {
          Header: "ação",
          accessor: "tipo",
          sortable: false
        },
        {
          Header: "preço",
          accessor: "preco"
        }, {
          Header: "total",
          accessor: "total"
        }
      ]}
      defaultSorted={this.state.sorted}
      defaultPageSize={100}
      className="-striped -highlight"
      showPagination={false}
    />
  )
  }

  render() {
    return (
      <div id="historicoTabContent" className={`tabcontent ${this.props.status}`}>

      {/* <table className="table table-bordered table-striped trade">
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
      </table> */}
        {this.mountTable()}

    </div>
    )
  }
}

const mapStateToProps = state => ({
  dataHistorico: state.cripto.dataHistorico
});

export default connect(mapStateToProps)(NegociacaoTab);
