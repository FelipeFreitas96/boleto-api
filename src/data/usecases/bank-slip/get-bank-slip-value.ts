import { SplittedData } from '../../../domain/entity/splitted-data';
import { GetTicketValueUsecase } from '../../../domain/usecases/get-ticket-value-usecase';

export class GetBankSlipValue implements GetTicketValueUsecase {
    run(splittedData: SplittedData) {
        return (Number(splittedData.value) * 0.01).toFixed(2);
    }
}