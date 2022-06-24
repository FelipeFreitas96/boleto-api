import { ConssectionaryData } from '../../../../../domain/entity/conssectionary-data';
import { ValidateVerifyDigitUsecase } from '../../../../../domain/usecases/validate/validate-verify-digit-usecase';

export class ValidateFourtyFourConssectionaryVerifyDigit implements ValidateVerifyDigitUsecase<ConssectionaryData> {
    run(splittedData: ConssectionaryData) {
        return false;
    }
}