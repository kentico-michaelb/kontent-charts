import { formatArrayValues } from './js/Helpers/formatHelper.js'

export const resolveItemInRichText = (item) => {

    if (item.system.type === 'bar' || item.system.type === 'line') {
      let chart = item;
      return `
        <div style="height: ${chart.graph_height.value}px; width: ${chart.graph_width.value}px;">
          <canvas id="${chart.system.codename}" name="${chart.system.codename}"></canvas>
      </div>`;
    }

    if (item.system.type === 'label') {
      return  item.label.value;
    }

    if (item.system.type === 'dataset') {
      
      let data = {
        dataPoints: formatArrayValues(item.data_points.resolveHtml()),
        legendLabel: item.legend_label.value,
        backgroundColor: item.background_color.value[0].name,
        borderColor: item.border_color.value[0].name,
        borderWidth: item.border_width.value,
        displayLegend: item.display_legend
      }

      return JSON.stringify(data);
    }

    if (item.system.type === 'data_point') {
      return item.data_point.value;
    }
    return undefined;
  };