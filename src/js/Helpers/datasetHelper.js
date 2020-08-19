import { formatArrayValues } from './formatHelper.js';
import { DataSet } from '../../Models/DataSet.js';

export function createDataSet(apiValues) {
    let dataset = apiValues.dataset.resolveHtml();
    dataset = formatArrayValues(dataset);
    
    //parse string into JSON Object to be used in ChartJS's Chart class
    const jsonArray = dataset.map(item => JSON.parse(item));

    //array for multiple data points within a column
    let graphData = [];

    //create dataset from formatted values
    for (let data of jsonArray) {
            let ds = new DataSet(
                data.dataPoints,
                data.backgroundColor,
                data.borderWidth,
                data.borderColor,
                data.legendLabel
            )

            graphData.push(ds);
        }

        return graphData;
}