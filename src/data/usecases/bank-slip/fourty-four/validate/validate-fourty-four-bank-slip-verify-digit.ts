import { BankSlipData } from '../../../../../domain/entity/bank-slip-data';
import { ValidateVerifyDigitUsecase } from '../../../../../domain/usecases/validate/validate-verify-digit-usecase';

export class ValidateFourtyFourBankSlipVerifyDigit implements ValidateVerifyDigitUsecase<BankSlipData> {
    run(splittedData: BankSlipData): boolean {
        let verifyDigit = 0;
        let sum = 0;
        let multiplier = 2;

        for (let index = 1; index <= splittedData.data.length; index++) {
            if (index === 40) continue;

            const fieldValue = splittedData.data.at(-index);
            const multipliedValue = Number(fieldValue) * multiplier;
            sum += multipliedValue;

            if (multiplier++ >= 9) {
                multiplier = 2;
            }
        }

        const restValue = 11 - Math.floor(sum % 11);
        if (restValue === 0 || restValue === 10 || restValue === 1) {
            verifyDigit = 1;
        } else {
            verifyDigit = restValue;
        }

        return splittedData.verifiyDigit[0] === String(verifyDigit);
    }
}