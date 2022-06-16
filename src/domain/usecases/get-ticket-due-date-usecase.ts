import { SplittedData } from "../entity/splitted-data";

export interface GetTicketDueDateUsecase {
    run: (value: SplittedData) => string;
}