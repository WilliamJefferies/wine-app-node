import * as lib from '.'

/*
Builder should not be split in seperate files
 */

/*
Constructs res send object with either analysis strategies or lot codes
should be in db wrapper in prod env
 */
export default (caller_name, handleErrVars) => {
    let valid;
    try {
        caller_name === 'getBreakDownStrategiesHandler' ? valid = lib.getValidStrategies()
            : caller_name === 'getLotCodesHandler' ? valid = lib.getValidLotCodes()
            : lib.handleErr(handleErrVars);
        return {
            validInput: valid
        }
    } catch (e) {
        lib.handleErr(handleErrVars, e);
    }
};