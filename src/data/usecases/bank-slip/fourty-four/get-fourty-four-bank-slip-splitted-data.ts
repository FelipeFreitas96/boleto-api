import { BankSlipData } from '../../../../domain/entity/bank-slip-data';
import { GetDataUsecase } from '../../../../domain/usecases/get-data-usecase';

export class GetFourtyFourBankSlipBankSlipData implements GetDataUsecase<BankSlipData> {
    run(data: string): BankSlipData {
        return {
            data,
            fullCampField1: data.slice(0, 4) + data.slice(19, 24),
            fullCampField2: data.slice(24, 34),
            fullCampField3: data.slice(34, 44),
            bankIdentifier: data.slice(0, 3),
            coinCode: data.slice(3, 4),
            freeCampField1: data.slice(19, 24),
            verifiyDigit: [String(data.at(4))],
            verifiyDigitGeneral: data.slice(4, 5),
            dueDate: data.slice(5, 9),
            value: data.slice(9, 19),
        };
    }
}