import { ParseTicketJSON } from "../data/usecases/parse-ticket-json";
import { ValidateBankSlip } from "../data/usecases/bank-slip/validate/validate-bank-slip";
import { ValidateBankSlipVerifyDigit } from "../data/usecases/bank-slip/validate/validate-bank-slip-verify-digit";
import { GetBankSlipSplittedData } from "../data/usecases/bank-slip/get-bank-slip-splitted-data";
import { GetBankSlipValue } from "../data/usecases/bank-slip/get-bank-slip-value"; 
import { GetTicketDueDate } from "../data/usecases/get-ticket-due-date"; 
import { GetDigitableSynonymousCode } from "../data/usecases/bank-slip/get-bank-slip-synonymous-code"; 

export function makeBankSlip(value: string) {
    const validateBankSlipVerify = new ValidateBankSlipVerifyDigit();
    const validateBankSlip = new ValidateBankSlip();
    const getBankSlipSplittedData = new GetBankSlipSplittedData();
    const getBankSlipValue = new GetBankSlipValue();
    const getTicketDueDate = new GetTicketDueDate();
    const getDigitableSynonymousCode = new GetDigitableSynonymousCode();
    const bankSlip = new ParseTicketJSON(
        validateBankSlip,
        validateBankSlipVerify,
        getBankSlipSplittedData,
        getBankSlipValue,
        getTicketDueDate,
        getDigitableSynonymousCode,
    );
    
    return bankSlip.run(value);
}