import { ConssectionaryData } from '../../../../domain/entity/conssectionary-data';
import { GetDataUsecase } from '../../../../domain/usecases/get-data-usecase';

export class GetFourtyFourConssectionaryConssectionaryData implements GetDataUsecase<ConssectionaryData> {
    run(data: string): ConssectionaryData {
        return {
            productIdentify: '',
            segmentIdentify: '',
            valueIdentify: '',
            verifiyDigitGeneral: '',
            value: '',
            companyIdentify: '',
            freeCampField1: '',
            document: '',
            freeCampField2: '',
        };
    }
}