import { ValidateUsecase } from '../../../../../domain/usecases/validate/validate-usecase';

export class ValidateFourtyFourBankSlip implements ValidateUsecase {
    run(digitableLine: string) {
        return (digitableLine.length === 44);
    }
}