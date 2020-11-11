import * as lib from './index';

const run = (data, strategy, handleErrVars) => {
    let processedData = {};

    for (let item in data) {
        let {propertyType, propertyVal} = useStrategy(data[item], strategy, handleErrVars)
        let percentage = data[item].percentage;
        console.log(percentage)
        console.log(propertyVal)
        console.log(propertyType)
        if (processedData.hasOwnProperty(propertyVal)) {
            processedData[propertyVal].percentage += percentage
        } else {
            processedData[propertyVal] = {
                percentage: percentage
            }
            processedData[propertyVal][propertyType] = propertyVal;
        }
    }

    return processedData;
};

//sort data
const sort = (data) => {
    let sortable = [];
    let returnArr = [];
    for (let item in data) {
        sortable.push([data[item], data[item].percentage]);
    }
    const sorted = sortable.sort((a, b) => b[1] - a[1]);

    for (let item in sorted) {
        returnArr.push(sorted[item][0]);
    }
    return returnArr;
};

const useStrategy = (item, strategy, handleErrVars) => {
    let propertyType
    let propertyVal
    switch (strategy) {
        case 'region':
            propertyType = 'region';
            propertyVal = item.region;
            break;
        case 'variety':
            propertyType = 'variety';
            propertyVal = item.variety;
            break;
        case 'year':
            propertyType = 'year';
            propertyVal = item.year;
            break;
        case ('year-variety'):
            propertyType = 'year-variety';
            propertyVal = `${item.year} - ${item.variety}`;
            break;
        default:
            lib.handleErr(handleErrVars);
    }
    return {propertyType, propertyVal};
}

export {run, sort}