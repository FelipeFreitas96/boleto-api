import { BankSlipData } from '../../../../domain/entity/bank-slip-data';
import { GetSynonymousCodeUsecase } from '../../../../domain/usecases/get-synonymous-code-usecase';

export class GetFourtyFourBankSlipSynonymousCode implements GetSynonymousCodeUsecase<BankSlipData> {
    run(splittedData: BankSlipData) {
        return splittedData.data;
    }
}