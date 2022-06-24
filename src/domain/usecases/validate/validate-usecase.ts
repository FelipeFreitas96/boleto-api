export interface ValidateUsecase {
    run: (code: string) => boolean;
}