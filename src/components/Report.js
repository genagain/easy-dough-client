import React, {useEffect} from 'react';

function Report(props) {
  return (
    <div>
			<svg width="750" height="75">
				<rect height="50" width="750" style={{
				 fill: 'rgb(229, 231, 235)'
				 }}></rect>
				<rect height="50" width="300" style={{
				 fill: 'rgb(5, 150, 105)'
				 }}></rect>
			</svg>
      <svg width="750" height="75">
				<rect height="50" width="750" style={{
				 fill: 'rgb(229, 231, 235)'
				 }}></rect>
				<rect height="50" width="750" style={{
				 fill: 'rgb(220, 38, 38)'
				 }}></rect>
			</svg>
    </div>
  )
}

export default Report
