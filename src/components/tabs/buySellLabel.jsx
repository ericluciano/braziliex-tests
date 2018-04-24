import React from 'react';

const configSpan = {
    buy: 'fa-circle',
    sell: 'fa-circle',
    total:'fa-globe'
}

const buySellLabel = props => {
  const extClass = configSpan[props.tipo];
  const defClass = `label-${props.tipo}`;

  return(
    <i className={`far fa-fw ${extClass} ${defClass}`} title={props.tipo} alt={props.tipo}></i>
  )
}

export default buySellLabel;
