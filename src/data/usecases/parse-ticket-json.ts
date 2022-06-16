import { GetTicketSynonymousCodeUsecase } from '../../domain/usecases/get-ticket-synonymous-code-usecase';
import { GetTicketDueDateUsecase } from '../../domain/usecases/get-ticket-due-date-usecase';
import { GetTicketValueUsecase } from '../../domain/usecases/get-ticket-value-usecase';
import { GetTicketSplittedDataUsecase } from '../../domain/usecases/get-ticket-splitted-data';
import { ValidateTicketVerifyDigitUsecase } from '../../domain/usecases/validate/validate-ticket-verify-digit-usecase';
import { ValidateTicketUsecase } from '../../domain/usecases/validate/validate-ticket-usecase';
import { ParseTicketJSONUsecase } from '../../domain/usecases/parse-ticket-json-usecase';

export class ParseTicketJSON implements ParseTicketJSONUsecase {
    constructor(
        readonly validateTicket: ValidateTicketUsecase,
        readonly validateTicketVerifyDigits: ValidateTicketVerifyDigitUsecase,
        readonly getTicketSplittedData: GetTicketSplittedDataUsecase,
        readonly getTicketValue: GetTicketValueUsecase,
        readonly getTicketDueDate: GetTicketDueDateUsecase,
        readonly getTicketBarCode: GetTicketSynonymousCodeUsecase,
    ) { }

    run(data: string) {
        if (!this.validateTicket.run(data)) {
            throw new Error('Formato de boleto inválido.');
        }

        const splittedData = this.getTicketSplittedData.run(data);       
        if (!this.validateTicketVerifyDigits.run(splittedData)) {
            throw new Error('Digito verificador inválido.');
        }
        
        return {
            barCode: this.getTicketBarCode.run(splittedData),
            amount: this.getTicketValue.run(splittedData),
            expirationDate: this.getTicketDueDate.run(splittedData),
        };
    }
}