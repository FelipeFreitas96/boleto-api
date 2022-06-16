import { ValidateTicketUsecase } from '../../../../domain/usecases/validate/validate-ticket-usecase';

export class ValidateBankSlip implements ValidateTicketUsecase {
    run(digitableLine: string) {
        return (digitableLine.length === 44);
    }
}