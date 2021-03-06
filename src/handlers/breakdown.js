import * as lib from "../lib";

/*
Handles get /api/breakdown/*
 */
export default (req, res) => {
    const strategy = req.breakDownStrategy;
    const lotCode = req.lotCode;

    const handleErrVars = {
        code: 500,
        message: `500 Internal Server Error:
    Could not handle breakdown request
    Strategy: ${strategy}
    Lot Code: ${lotCode}`,
        res: res
    };

    const data = lib.dataConnector.getData(lotCode, handleErrVars);
    const brokenDownData = lib.breakDown.run(data, strategy, handleErrVars);
    const sortedData = lib.breakDown.sort(brokenDownData, handleErrVars);
    res.status(200).json(lib.resBuilder.breakDown(strategy, lotCode, sortedData, handleErrVars));
};