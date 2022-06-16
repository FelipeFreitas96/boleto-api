import { ValidateTicketUsecase } from '../../../../domain/usecases/validate/validate-ticket-usecase';

export class ValidateDigitableLine implements ValidateTicketUsecase {
    run(digitableLine: string) {
        return (digitableLine.length >= 47 && digitableLine.length <= 48);
    }
}