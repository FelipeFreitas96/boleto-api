import { BankSlipData } from '../../../../domain/entity/bank-slip-data';
import { GetDataUsecase } from '../../../../domain/usecases/get-data-usecase';

export class GetFourtySevenBankSlipBankSlipData implements GetDataUsecase<BankSlipData> {
    run(data: string): BankSlipData {
        return {
            data,
            fullCampField1: data.slice(0, 9),
            fullCampField2: data.slice(10, 20),
            fullCampField3: data.slice(21, 31),
            bankIdentifier: data.slice(0, 3),
            coinCode: data.slice(3, 4),
            freeCampField1: data.slice(4, 9),
            verifiyDigit: [
                data.slice(9, 10),
                data.slice(20, 21),
                data.slice(31, 32),
            ],
            verifiyDigitGeneral: data.slice(32, 33),
            dueDate: data.slice(33, 37),
            value: data.slice(37, 47),
        };
    }
}