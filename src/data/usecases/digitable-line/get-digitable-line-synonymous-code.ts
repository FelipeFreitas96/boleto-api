import { SplittedData } from '../../../domain/entity/splitted-data';
import { GetTicketSynonymousCodeUsecase } from '../../../domain/usecases/get-ticket-synonymous-code-usecase';

export class GetDigitableSynonymousCode implements GetTicketSynonymousCodeUsecase {
    run(splittedData: SplittedData) {
        return [
            splittedData.bankIdentifier,
            splittedData.coinCode,
            splittedData.verifiyDigitGeneral,
            splittedData.dueDate,
            splittedData.value,
            splittedData.freeCampField1,
            splittedData.fullCampField2,
            splittedData.fullCampField3,
        ].join("");
    }
}