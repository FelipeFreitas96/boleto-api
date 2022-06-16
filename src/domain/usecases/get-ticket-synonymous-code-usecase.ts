import { SplittedData } from "../entity/splitted-data";

export interface GetTicketSynonymousCodeUsecase {
    run: (value: SplittedData) => string;
}