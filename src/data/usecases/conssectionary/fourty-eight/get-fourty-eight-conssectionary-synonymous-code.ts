import { ConssectionaryData } from '../../../../domain/entity/conssectionary-data';
import { GetSynonymousCodeUsecase } from '../../../../domain/usecases/get-synonymous-code-usecase';

export class GetFourtyEightConssectionarySynonymousCode implements GetSynonymousCodeUsecase<ConssectionaryData> {
    run(splittedData: ConssectionaryData) {
        return "";
    }
}