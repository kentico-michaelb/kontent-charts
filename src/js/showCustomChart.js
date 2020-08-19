import Chart from 'chart.js';
import { createDataSet } from './Helpers/datasetHelper.js';
import { createCustomChart } from './Helpers/customChartHelper';

export function showCustomChart(apiValues) {
    //format dataset values from Kentico Kontent
    let graphData = createDataSet(apiValues);
    
    //create chart using dataset
    let kontentChart = createCustomChart(apiValues, graphData);

    //simplified ChartJS code from https://www.chartjs.org/docs/latest/getting-started/
    //Kontent values used to replace static data
    var ctx = document.getElementById(apiValues.system.codename).getContext('2d');
    
    var myChart = new Chart(ctx, {
        type: kontentChart.type,
        data: {
            labels: kontentChart.labels,
            datasets: [...kontentChart.dataset]
        },
        options: {
            legend: {
                display: kontentChart.displayLegend,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  return myChart;
}