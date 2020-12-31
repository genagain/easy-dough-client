import React, {useEffect} from 'react';
import Chart from 'chart.js';

			//<rect height="50" width="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)"></rect>
function Report(props) {
  return (
		<svg width="700" height="200">
			<rect height="100" width="600" style={{
       fill: 'rgb(100,100,100)'
       }}></rect>
			<rect height="100" width="50" style={{
       fill: 'rgb(255,0,255)'
       }}></rect>
    </svg>
  )
}

export default Report
