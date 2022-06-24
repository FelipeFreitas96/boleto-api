import { ParseJSON } from "../../data/usecases/parse-json";
import { ValidateFourtyFourBankSlip } from "../../data/usecases/bank-slip/fourty-four/validate/validate-fourty-four-bank-slip";
import { ValidateFourtyFourBankSlipVerifyDigit } from "../../data/usecases/bank-slip/fourty-four/validate/validate-fourty-four-bank-slip-verify-digit";
import { GetFourtyFourBankSlipBankSlipData } from "../../data/usecases/bank-slip/fourty-four/get-fourty-four-bank-slip-splitted-data";
import { GetValue } from "../../data/usecases/get-value"; 
import { GetDueDate } from "../../data/usecases/get-due-date"; 
import { GetFourtyFourBankSlipSynonymousCode } from "../../data/usecases/bank-slip/fourty-four/get-fourty-four-bank-slip-synonymous-code"; 

export function makeFourtyFour(value: string) {
    const validateFourtyFourBankSlip = new ValidateFourtyFourBankSlip();
    const validateFourtyFourBankSlipVerifyDigit = new ValidateFourtyFourBankSlipVerifyDigit();
    const getFourtyFourBankSlipBankSlipData = new GetFourtyFourBankSlipBankSlipData();
    const getValue = new GetValue();
    const getDueDate = new GetDueDate();
    const getFourtyFourBankSlipSynonymousCode = new GetFourtyFourBankSlipSynonymousCode();
    const digitableLine = new ParseJSON({
        validateUsecase: validateFourtyFourBankSlip,
        validateVerifyDigitsUsecase: validateFourtyFourBankSlipVerifyDigit,
        getDataUsecase: getFourtyFourBankSlipBankSlipData,
        getValueUsecase: getValue,
        getDueDateUsecase: getDueDate,
        getSynonymousCodeUsecase: getFourtyFourBankSlipSynonymousCode,
    });
    
    return digitableLine.run(value);
}