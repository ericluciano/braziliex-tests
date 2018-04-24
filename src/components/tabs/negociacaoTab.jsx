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
            qtd: amount,
            tipo: <BuySellLabel tipo={i['type']} />,
            preco: i['price'],
            total: i['total']
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
          accessor: "qtd",
          sortMethod: (a, b) => {
                    if (a.length === b.length) {
                      return a > b ? 1 : -1;
                    }
                    return a.length > b.length ? 1 : -1;
          }
        },
        {
          Header: "ação",
          accessor: "tipo",
          sortable: false
        },
        {
          Header: "preço",
          accessor: "preco",
          Cell: props => formatCurrencyToBr(props.value),
          sortMethod: (a, b) => {
                    if (a.length === b.length) {
                      return a > b ? 1 : -1;
                    }
                    return a.length > b.length ? 1 : -1;
          }
        }, {
          Header: "total",
          accessor: "total",
          Cell: props => formatCurrencyToBr(props.value),
          sortMethod: (a, b) => {
                    if (a.length === b.length) {
                      return a > b ? 1 : -1;
                    }
                    return a.length > b.length ? 1 : -1;
          }
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
      <div id="historicoTabContent"
        className={`tabcontent ${this.props.status}`}>
        {this.mountTable()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  dataHistorico: state.cripto.dataHistorico
});

export default connect(mapStateToProps)(NegociacaoTab);
