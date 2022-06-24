import { ParseJSON } from "../../data/usecases/parse-json";
import { ValidateFourtySevenBankSlip } from "../../data/usecases/bank-slip/fourty-seven/validate/validate-fourty-seven-bank-slip";
import { ValidateFourtySevenBankSlipVerifyDigit } from "../../data/usecases/bank-slip/fourty-seven/validate/validate-fourty-seven-bank-slip-verify-digit";
import { GetFourtySevenBankSlipBankSlipData } from "../../data/usecases/bank-slip/fourty-seven/get-fourty-seven-bank-slip-splitted-data";
import { GetValue } from "../../data/usecases/get-value"; 
import { GetDueDate } from "../../data/usecases/get-due-date"; 
import { GetFourtySevenBankSlipSynonymousCode } from "../../data/usecases/bank-slip/fourty-seven/get-fourty-seven-bank-slip-synonymous-code"; 

export function makeFourtySeven(value: string) {
    const validateFourtySevenBankSlip = new ValidateFourtySevenBankSlip();
    const validateFourtySevenBankSlipVerifyDigit = new ValidateFourtySevenBankSlipVerifyDigit();
    const getFourtySevenBankSlipBankSlipData = new GetFourtySevenBankSlipBankSlipData();
    const getValue = new GetValue();
    const getDueDate = new GetDueDate();
    const getFourtySevenBankSlipSynonymousCode = new GetFourtySevenBankSlipSynonymousCode();
    const digitableLine = new ParseJSON({
        validateUsecase: validateFourtySevenBankSlip,
        validateVerifyDigitsUsecase: validateFourtySevenBankSlipVerifyDigit,
        getDataUsecase: getFourtySevenBankSlipBankSlipData,
        getValueUsecase: getValue,
        getDueDateUsecase: getDueDate,
        getSynonymousCodeUsecase: getFourtySevenBankSlipSynonymousCode,
    });
    
    return digitableLine.run(value);
}