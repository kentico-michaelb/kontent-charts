export class DataSet {
    constructor(data, backgroundColor, borderWidth, borderColor, legendLabel) {   
        this.data = data;
        this.backgroundColor = backgroundColor;
        this.borderWidth = borderWidth;
        this.borderColor = borderColor;
        this.label = legendLabel;
        this.hoverBackgroundColor = backgroundColor;
    }
}