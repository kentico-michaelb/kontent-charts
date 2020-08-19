export class CustomChart {
    constructor(type, columnLabels, graphData, displayLegend=false) {
        this.type = type;
        this.labels = columnLabels;
        this.dataset = graphData;
        this.displayLegend = displayLegend;
    }
}