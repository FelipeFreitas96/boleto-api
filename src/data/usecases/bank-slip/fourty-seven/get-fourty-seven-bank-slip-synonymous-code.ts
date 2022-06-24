import { BankSlipData } from '../../../../domain/entity/bank-slip-data';
import { GetSynonymousCodeUsecase } from '../../../../domain/usecases/get-synonymous-code-usecase';

export class GetFourtySevenBankSlipSynonymousCode implements GetSynonymousCodeUsecase<BankSlipData> {
    run(splittedData: BankSlipData) {
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