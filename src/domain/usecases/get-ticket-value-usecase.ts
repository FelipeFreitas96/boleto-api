import { SplittedData } from "../entity/splitted-data";

export interface GetTicketValueUsecase {
    run: (value: SplittedData) => string;
}