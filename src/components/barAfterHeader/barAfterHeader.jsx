import React from 'react';
import PropTypes from 'prop-types';

const barAfterHeader = props => (
  <div className="bar-after-header">
    <div className="box-num-cvt">
      <span className="i-compra">
        <i className="far fa-fw fa-circle label-buy label-spacing" />
        {props.compra}
      </span>
      <span className="i-venda">
        <i className="far fa-fw fa-circle label-sell label-spacing" />
        {props.venda}
      </span>
      <span className="i-total">
        <i className="fa fa-fw fa-globe label-total" />
        {props.total}
      </span>
    </div>
    <div className="box-total-cvt">
      <span className="total-compra">
        <i className="far fa-fw fa-circle label-buy label-spacing" />
        {props.totalCompra}
      </span>
      <span className="total-venda">
        <i className="far fa-fw fa-circle label-sell label-spacing" />
        {props.totalVenda}
      </span>
      <span className="total-montante">
        <i className="fa fa-fw fa-globe label-total" />
        {props.totalMontante}
      </span>
    </div>
  </div>
);

barAfterHeader.defaultProps = {
  compra: 0,
  venda: 0,
  total: 0,
  totalCompra: 0,
  totalVenda: 0,
  totalMontante: 0,
};

barAfterHeader.propTypes = {
  compra: PropTypes.number,
  venda: PropTypes.number,
  total: PropTypes.number,
  totalCompra: PropTypes.number,
  totalVenda: PropTypes.number,
  totalMontante: PropTypes.number,
};

export default barAfterHeader;
