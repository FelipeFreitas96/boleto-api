import { ParseJSON } from "../../data/usecases/parse-json";
import { ValidateFourtyFourBankSlip } from "../../data/usecases/bank-slip/fourty-four/validate/validate-fourty-four-bank-slip";
import { ValidateFourtyFourBankSlipVerifyDigit } from "../../data/usecases/bank-slip/fourty-four/validate/validate-fourty-four-bank-slip-verify-digit";
import { GetFourtyFourBankSlipBankSlipData } from "./bank-slip/fourty-four/get-fourty-four-bank-slip-splitted-data";
import { GetValue } from "../../data/usecases/get-value"; 
import { GetDueDate } from "../../data/usecases/get-due-date"; 
import { GetFourtyFourBankSlipSynonymousCode } from "./bank-slip/fourty-four/get-fourty-four-bank-slip-synonymous-code"; 

function makeSut() {
    const validateFourtyFourSlip = new ValidateFourtyFourBankSlip();
    const validateFourtyFourSlipVerify = new ValidateFourtyFourBankSlipVerifyDigit();
    const getFourtyFourSlipBankSlipData = new GetFourtyFourBankSlipBankSlipData();
    const getSlipValue = new GetValue();
    const getSlipDueDate = new GetDueDate();
    const getDigitableSynonymousCode = new GetFourtyFourBankSlipSynonymousCode();
    const bankSlip = new ParseJSON(
        validateFourtyFourSlip,
        validateFourtyFourSlipVerify,
        getFourtyFourSlipBankSlipData,
        getSlipValue,
        getSlipDueDate,
        getDigitableSynonymousCode,
    );
    
    return  {
        validateFourtyFourSlipVerify,
        validateFourtyFourSlip,
        getFourtyFourSlipBankSlipData,
        getSlipValue,
        getSlipDueDate,
        getDigitableSynonymousCode,
        bankSlip,
    };
}

describe('Parse Slip Json', () => {
    test('precisa dar throw quando a validação do slip der errado', () => {
        const sut = makeSut();
        expect(() => sut.bankSlip.run("any_slip")).toThrow();
    })
    test('precisa dar throw quando o digito der errado', () => {
        const sut = makeSut();
        jest.spyOn(sut.validateFourtyFourSlip, "run").mockImplementationOnce(() => true);
        expect(() => sut.bankSlip.run("any_slip")).toThrow();
    })
    test('precisa passar quando tudo estiver correto', () => {
        const sut = makeSut();
        jest.spyOn(sut.validateFourtyFourSlip, "run").mockImplementationOnce(() => true);
        jest.spyOn(sut.validateFourtyFourSlipVerify, "run").mockImplementationOnce(() => true);
        expect(() => sut.bankSlip.run("any_slip")).not.toBeUndefined();
    })
})