import { SplittedData } from "../../entity/splitted-data";

export interface ValidateTicketVerifyDigitUsecase {
    run(splittedData: SplittedData): boolean;
}