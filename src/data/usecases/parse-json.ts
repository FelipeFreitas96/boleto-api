import { GetSynonymousCodeUsecase } from '../../domain/usecases/get-synonymous-code-usecase';
import { GetDueDateUsecase } from '../../domain/usecases/get-due-date-usecase';
import { GetValueUsecase } from '../../domain/usecases/get-value-usecase';
import { GetDataUsecase } from '../../domain/usecases/get-data-usecase';
import { ValidateVerifyDigitUsecase } from '../../domain/usecases/validate/validate-verify-digit-usecase';
import { ValidateUsecase } from '../../domain/usecases/validate/validate-usecase';
import { ParseJSONUsecase } from '../../domain/usecases/parse-json-usecase';

export class ParseJSON<Data> implements ParseJSONUsecase {
    constructor(readonly props: {
        validateUsecase?: ValidateUsecase,
        validateVerifyDigitsUsecase?: ValidateVerifyDigitUsecase<Data>,
        getDataUsecase?: GetDataUsecase<Data>,
        getValueUsecase?: GetValueUsecase<Data>,
        getDueDateUsecase?: GetDueDateUsecase<Data>,
        getSynonymousCodeUsecase?: GetSynonymousCodeUsecase<Data>,
    }) {}

    run(data: string) {
        if (!this.props.validateUsecase?.run(data)) {
            return { message: 'Formato de boleto inválido.' };
        }

        const splittedData = this.props.getDataUsecase?.run(data);    
        if (!splittedData) {
            return { message: 'Erro ao fazer leitura do boleto.' };
        }
        
        if (!this.props.validateVerifyDigitsUsecase?.run(splittedData)) {
            return { message: 'Digito verificador inválido.' };
        }
        
        return {
            barCode: this.props.getSynonymousCodeUsecase?.run(splittedData) || '',
            amount: this.props.getValueUsecase?.run(splittedData) || '',
            expirationDate: this.props.getDueDateUsecase?.run(splittedData) || '',
        };
    }
}