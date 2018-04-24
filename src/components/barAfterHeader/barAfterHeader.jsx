import React from 'react';

const barAfterHeader = props => {
  return (
    <div className="bar-after-header">
      <div className="box-num-cvt">
        <span className="i-compra">
          <i className="far fa-fw fa-circle label-buy label-spacing"></i>
          {props.compra}
        </span>
        <span className="i-venda">
          <i className="far fa-fw fa-circle label-sell label-spacing"></i>
          {props.venda}
        </span>
        <span className="i-total">
          <i className="fa fa-fw fa-globe label-total"></i>
          {props.total}
        </span>
      </div>
      <div className="box-total-cvt">
        <span className="total-compra">
          <i className="far fa-fw fa-circle label-buy label-spacing"></i>
          {props.totalCompra}
        </span>
        <span className="total-venda">
          <i className="far fa-fw fa-circle label-sell label-spacing"></i>
          {props.totalVenda}
        </span>
        <span className="total-montante">
          <i className="fa fa-fw fa-globe label-total"></i>
          {props.totalMontante}
        </span>
      </div>
    </div>
  )
}

export default barAfterHeader;
