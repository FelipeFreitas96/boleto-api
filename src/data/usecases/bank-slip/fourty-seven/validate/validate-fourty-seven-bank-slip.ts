import { ValidateUsecase } from '../../../../../domain/usecases/validate/validate-usecase';

export class ValidateFourtySevenBankSlip implements ValidateUsecase {
    run(digitableLine: string) {
        return (digitableLine.length === 47);
    }
}