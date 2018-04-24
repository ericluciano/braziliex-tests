import React from 'react';

const mercadoTab = props => {

  return(
    <div id="historicoTabContent" className={`tabcontent ${props.status}`}>
      <div>
        <iframe src="https://br.investingwidgets.com/top-cryptocurrencies?theme=darkTheme" title="investing" frameBorder="0" allowTransparency="true" className="frameInvesting"></iframe>
      </div>
    </div>
  )
}
export default mercadoTab;
