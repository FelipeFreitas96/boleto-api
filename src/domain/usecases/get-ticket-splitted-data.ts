import { SplittedData } from "../entity/splitted-data";

export interface GetTicketSplittedDataUsecase {
    run: (value: string) => SplittedData;
}