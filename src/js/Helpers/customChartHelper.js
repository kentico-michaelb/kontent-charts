import { CustomChart } from '../../Models/CustomChart.js';
import { formatArrayValues } from './formatHelper.js';

export function createCustomChart(apiValues, graphData) {
    //formatting removes HTML markup from Kontent Rich Text Elements
    let columnLabels = formatArrayValues(apiValues.column_labels.resolveHtml());
    let displayLegend = apiValues.display_legend.value[0].name

    let chart = new CustomChart(
        apiValues.system.type,
        columnLabels,
        graphData,
        displayLegend
        );

    return chart;
}