/*
This is practically duplicate code and needs to be fixed up, was last step and not thought out
 */

export default (data) => {
    let processedData = {};
    for (let item in data) {
        let year = data[item].year;
        let percentage = data[item].percentage;
        if (processedData.hasOwnProperty(year)) {
            processedData[year].percentage += percentage;
        } else {
            processedData[year] = {
                year: year,
                percentage: percentage
            }

        }
    }

    return processedData;
};