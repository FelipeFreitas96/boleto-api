export interface ValidateVerifyDigitUsecase<Data> {
    run(data: Data): boolean;
}