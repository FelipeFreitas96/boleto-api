import { SplittedData } from '../../../domain/entity/splitted-data';
import { GetTicketSynonymousCodeUsecase } from '../../../domain/usecases/get-ticket-synonymous-code-usecase';

export class GetBankSlipSynonymousCode implements GetTicketSynonymousCodeUsecase {
    run(splittedData: SplittedData) {
        return splittedData.data;
    }
}