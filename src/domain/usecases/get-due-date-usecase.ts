export interface GetDueDateUsecase<Data> {
    run: (value: Data) => string;
}