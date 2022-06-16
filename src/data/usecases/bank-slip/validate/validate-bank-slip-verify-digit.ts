import { SplittedData } from '../../../../domain/entity/splitted-data';
import { ValidateTicketVerifyDigitUsecase } from '../../../../domain/usecases/validate/validate-ticket-verify-digit-usecase';

export class ValidateBankSlipVerifyDigit implements ValidateTicketVerifyDigitUsecase {
    run(splittedData: SplittedData): boolean {
        let verifyDigit = 0;
        let sum = 0;
        let multiplier = 2;
        let size = splittedData.data.length;

        for (let index = 1; index < size; index++) {
            if (size - index === 5) {
                continue;
            }

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