import { ParseJSON } from "../../data/usecases/parse-json";
import { ValidateFourtyFourBankSlip } from "../../data/usecases/bank-slip/fourty-four/validate/validate-fourty-four-bank-slip";
import { ValidateFourtyFourBankSlipVerifyDigit } from "../../data/usecases/bank-slip/fourty-four/validate/validate-fourty-four-bank-slip-verify-digit";
import { GetFourtyFourBankSlipBankSlipData } from "./bank-slip/fourty-four/get-fourty-four-bank-slip-splitted-data";
import { GetValue } from "../../data/usecases/get-value"; 
import { GetDueDate } from "../../data/usecases/get-due-date"; 
import { GetFourtyFourBankSlipSynonymousCode } from "./bank-slip/fourty-four/get-fourty-four-bank-slip-synonymous-code"; 
import { BankSlipData } from "../../domain/entity/bank-slip-data";

function makeSut() {
    const validateFourtyFourBankSlip = new ValidateFourtyFourBankSlip();
    const validateFourtyFourBankSlipVerifyDigit = new ValidateFourtyFourBankSlipVerifyDigit();
    const getFourtyFourBankSlipBankSlipData = new GetFourtyFourBankSlipBankSlipData();
    const getValue = new GetValue();
    const getDueDate = new GetDueDate();
    const getFourtyFourBankSlipSynonymousCode = new GetFourtyFourBankSlipSynonymousCode();
    const bankSlip = new ParseJSON<BankSlipData>({
        validateUsecase: validateFourtyFourBankSlip,
        validateVerifyDigitsUsecase: validateFourtyFourBankSlipVerifyDigit,
        getDataUsecase: getFourtyFourBankSlipBankSlipData,
        getValueUsecase: getValue,
        getDueDateUsecase: getDueDate,
        getSynonymousCodeUsecase: getFourtyFourBankSlipSynonymousCode,
    });
    
    return  {
        validateFourtyFourBankSlip,
        validateFourtyFourBankSlipVerifyDigit,
        getFourtyFourBankSlipBankSlipData,
        getValue,
        getDueDate,
        getFourtyFourBankSlipSynonymousCode,
        bankSlip,
    };
}

describe('Parse Slip Json', () => {
    test('precisa dar throw quando a validação do slip der errado', () => {
        const sut = makeSut();
        const response = sut.bankSlip.run("any_slip");
        expect(response.message).toBe('Formato de boleto inválido.');
    })
    test('precisa dar throw quando o digito der errado', () => {
        const sut = makeSut();
        jest.spyOn(sut.validateFourtyFourBankSlip, "run").mockImplementationOnce(() => true);

        const response = sut.bankSlip.run("any_slip");
        expect(response.message).toBe('Digito verificador inválido.');
    })
    test('precisa passar quando estiver tudo certo', () => {
        const sut = makeSut();
        jest.spyOn(sut.validateFourtyFourBankSlip, "run").mockImplementationOnce(() => true);
        jest.spyOn(sut.validateFourtyFourBankSlipVerifyDigit, "run").mockImplementationOnce(() => true);
        expect(sut.bankSlip.run("any_slip")).not.toBeUndefined();
    })
})