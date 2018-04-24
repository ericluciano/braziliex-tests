import React from 'react';

const barTop = (props) => {
  return(
      <div className={`row fixed-top ${props.active}`}>
        <div className="col-xs-12">
          <ul className="mercado-sngls">
            <li className="last">
              UC: <span className="info-last">{props.uc}</span>
            </li>
            <li className="volume24">
              VOL/24h:
              <span className="info-quoteVolume24">{props.volume}</span>
            </li>
            <li className="highestBid24">
              CMA/24h: <span className="info-highestBid24">{props.cma}</span>
            </li>
            <li className="lowestAsk24">
              CMB/24h: <span className="info-lowestAsk24">{props.cmb}</span>
            </li>
          </ul>
        </div>
      </div>

  )
}

export default barTop;
