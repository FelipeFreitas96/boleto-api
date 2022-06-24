import { GetValueUsecase } from '../../domain/usecases/get-value-usecase';

export class GetValue<Data extends { value: string }> implements GetValueUsecase<Data> {
    run(data: Data) {
        return (Number(data.value) * 0.01).toFixed(2);
    }
}