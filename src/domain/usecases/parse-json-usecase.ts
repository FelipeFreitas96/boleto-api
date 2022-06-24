import { ResponseError, ResponseJSON } from "../entity/response-json";

export interface ParseJSONUsecase {
    run: (value: string) => ResponseJSON | ResponseError;
}