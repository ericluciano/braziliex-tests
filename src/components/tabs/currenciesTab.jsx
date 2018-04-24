import React from 'react';
import { connect } from 'react-redux';

import { formatCurrencyToBr } from '../../utils/utils';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class CurrenciesTab extends React.Component {

  constructor(props) {
    super(props);
  }
  getImages(name) {

    const url = `https://braziliex.com/img/logos`;

    const images = {
      btc_brl: {
        logo: `${url}/btc_25w.png`,
        text: 'Bitcoin'
      },
      eth_brl: {
        logo: `${url}/eth_25w.png`,
        text: 'Ethereum'
      },
      bch_brl: {
        logo: `${url}/bch_25w.png`,
        text: 'BTC Cash'
      },
      ltc_brl: {
        logo: `${url}/ltc_25w.png`,
        text: 'LiteCoin'
      },
      xrp_brl: {
        logo: `${url}/xrp_25w.png`,
        text: 'Ripple',
      },
      trx_brl: {
        logo: `${url}/trx_25w.png`,
        text: 'Tron',
      },
      xmr_brl: {
        logo: `${url}/xmr_25w.png`,
        text: 'Monero'
      },
      dash_brl: {
        logo: `${url}/dash_25w.png`,
        text: 'Dash'
      },
      btg_brl: {
        logo: `${url}/btg_25w.png`,
        text: 'BTC Gold'
      },
      sngls_brl: {
        logo: `${url}/sngls_25w.png`,
        text: 'Singular'
      },
      gnt_brl: {
        logo: `${url}/gnt_25w.png`,
        text: 'Golem'
      },
      zec_brl: {
        logo: `${url}/zec_25w.png`,
        text: 'ZCash'
      },
      dcr_brl: {
        logo: `${url}/dcr_25w.png`,
        text: 'Decred'
      },
      mxt_brl: {
        logo: `${url}/mxt_25w.png`,
        text: 'Martex Coin'
      },
      eos_brl: {
        logo: `${url}/eos_25w.png`,
        text: 'EOS'
      },
      crw_brl: {
        logo: `${url}/crw_25w.png`,
        text: 'Crow'
      },
      omg_brl: {
        logo: `${url}/omg_25w.png`,
        text: 'OmiseGo'
      },
      bnb_brl: {
        logo: `${url}/bnb_25w.png`,
        text: 'Binance'
      },
    };
    
    if(images[name] === undefined) {
      return name;
    }

    return (
      <div>
        <img src={images[name].logo} alt={images[name].text} title={images[name].text} />
      </div>
    )
  }

  processMountData(props) {
    const data = props || [];

    const items = Object.values(data).map(i => {
          return {
            nome: i['market'],
            volume: i['quoteVolume24'],
            preco: i['last'],
            variacao: i['percentChange']
          }

        });

    return items.slice(0, 18);
  }

  mountTable() {
    return (
      <ReactTable
        data={this.processMountData(this.props.currencies)}
        columns={[{
          Header: "moeda",
          accessor: "nome",
          Cell: props => this.getImages(props.value),
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

        },
        {
          Header: "volume",
          accessor: "volume",
          Cell: props => formatCurrencyToBr(props.value),
          sortMethod: (a, b) => {
                    if (a.length === b.length) {
                      return a > b ? 1 : -1;
                    }
                    return a.length > b.length ? 1 : -1;
          }
        },
        {
          Header: "variação",
          accessor: "variacao",
          Cell: props => `${props.value}%`,
          sortMethod: (a, b) => {
                    if (a.length === b.length) {
                      return a > b ? 1 : -1;
                    }
                    return a.length > b.length ? 1 : -1;
          }

        }
      ]}
      defaultPageSize={18}
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
  currencies: state.cripto.currencies
});

export default connect(mapStateToProps)(CurrenciesTab);
