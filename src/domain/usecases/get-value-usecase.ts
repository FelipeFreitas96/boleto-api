export interface GetValueUsecase<Data> {
    run: (value: Data) => string;
}