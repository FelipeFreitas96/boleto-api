export interface GetDataUsecase<Data> {
    run: (value: string) => Data;
}