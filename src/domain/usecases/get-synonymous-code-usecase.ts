export interface GetSynonymousCodeUsecase<Data> {
    run: (value: Data) => string;
}