import { ParseTicketJSON } from "../../src/data/usecases/parse-ticket-json";
import { ValidateDigitableLine } from "../../src/data/usecases/digitable-line/validate/validate-digitable-line";
import { ValidateDigitableLineVerifyDigit } from "../../src/data/usecases/digitable-line/validate/validate-digitable-line-verify-digit";
import { GetDigitableLineSplittedData } from "../../src/data/usecases/digitable-line/get-digitable-line-splitted-data";
import { GetDigitableLineValue } from "../../src/data/usecases/digitable-line/get-digitable-line-value"; 
import { GetTicketDueDate } from "../../src/data/usecases/get-ticket-due-date"; 
import { GetDigitableSynonymousCode } from "../../src/data/usecases/digitable-line/get-digitable-line-synonymous-code"; 

export function makeDigitableLine(value: string) {
    const validateDigitableLineVerify = new ValidateDigitableLineVerifyDigit();
    const validateDigitableLine = new ValidateDigitableLine();
    const getDigitableLineSplittedData = new GetDigitableLineSplittedData();
    const getDigitableLineValue = new GetDigitableLineValue();
    const getTicketDueDate = new GetTicketDueDate();
    const getDigitableSynonymousCode = new GetDigitableSynonymousCode();
    const digitableLine = new ParseTicketJSON(
        validateDigitableLine,
        validateDigitableLineVerify,
        getDigitableLineSplittedData,
        getDigitableLineValue,
        getTicketDueDate,
        getDigitableSynonymousCode,
    );
    
    return digitableLine.run(value);
}