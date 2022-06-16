import { ParseTicketJSON } from "../../data/usecases/parse-ticket-json";
import { ValidateBankSlip } from "../../data/usecases/bank-slip/validate/validate-bank-slip";
import { ValidateBankSlipVerifyDigit } from "../../data/usecases/bank-slip/validate/validate-bank-slip-verify-digit";
import { GetBankSlipSplittedData } from "../../data/usecases/bank-slip/get-bank-slip-splitted-data";
import { GetBankSlipValue } from "../../data/usecases/bank-slip/get-bank-slip-value"; 
import { GetTicketDueDate } from "../../data/usecases/get-ticket-due-date"; 
import { GetDigitableSynonymousCode } from "../../data/usecases/bank-slip/get-bank-slip-synonymous-code"; 

function makeSut() {
    const validateBankSlip = new ValidateBankSlip();
    const validateBankSlipVerify = new ValidateBankSlipVerifyDigit();
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
    
    return  {
        validateBankSlipVerify,
        validateBankSlip,
        getBankSlipSplittedData,
        getBankSlipValue,
        getTicketDueDate,
        getDigitableSynonymousCode,
        bankSlip,
    };
}

describe('Parse Ticket Json', () => {
    test('precisa dar throw quando a validação do ticket der errado', () => {
        const sut = makeSut();
        expect(() => sut.bankSlip.run("any_ticket")).toThrow();
    })
    test('precisa dar throw quando o digito der errado', () => {
        const sut = makeSut();
        jest.spyOn(sut.validateBankSlip, "run").mockImplementationOnce(() => true);
        expect(() => sut.bankSlip.run("any_ticket")).toThrow();
    })
    test('precisa passar quando tudo estiver correto', () => {
        const sut = makeSut();
        jest.spyOn(sut.validateBankSlip, "run").mockImplementationOnce(() => true);
        jest.spyOn(sut.validateBankSlipVerify, "run").mockImplementationOnce(() => true);
        expect(() => sut.bankSlip.run("any_ticket")).not.toBeUndefined();
    })
})