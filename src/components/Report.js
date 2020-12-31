import React, {useEffect} from 'react';
import Chart from 'chart.js';
 /*       options: {*/
          //scales: {
            //xAxes: [{
              //stacked: true
            /*}]*/
          //}
function Report(props) {
  useEffect(() => {
		var ctx = document.getElementById('myChart').getContext('2d');
		var chart = new Chart(ctx, {
				// The type of chart we want to create
        type: 'horizontalBar',

				// The data for our dataset
				data: {
						labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
						datasets: [{
								label: 'My First dataset',
								backgroundColor: 'rgb(255, 99, 132)',
								borderColor: 'rgb(255, 99, 132)',
								data: [20, 10, 5, 2, 20, 30, 45]
						}, {
								label: 'My Second dataset',
								backgroundColor: 'rgb(255, 132, 99)',
								borderColor: 'rgb(255, 132, 99)',
								data: [0, 10, 12, 42, 21, 34, 11]
						}]
				},

				// Configuration options go here

      options: {
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            stacked: true
          }]
        }
      }
		});
  }, [])
  return <canvas id="myChart"></canvas>
}

export default Report
