import React from 'react';
import { moedas } from '../../constantes/moedas';

const Logo = (props) => {
  const { nome } = props;
  const imagem = require('../../images/'+nome+'.png');

  return (

      <h1>
        <img src={imagem} width={moedas[nome].width} height={moedas[nome].height} alt={nome} title={nome} className="logo" />
      </h1>

  )
};

export default Logo;
