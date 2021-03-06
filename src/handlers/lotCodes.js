import * as lib from '../lib';

/*
Handles get /api/lotcodes
 */
export default (req, res) => {
    const handleErrVars = {
        code: 500,
        message: '500 Internal Err. Could not retrieve lot codes',
        res: res
    };
    res.status(200).json(lib.resBuilder.validLotCodes());
};