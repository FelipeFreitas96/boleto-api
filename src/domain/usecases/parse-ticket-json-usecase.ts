import { ResponseJSON } from "../entity/response-json";

export interface ParseTicketJSONUsecase {
    run: (value: string) => ResponseJSON;
}