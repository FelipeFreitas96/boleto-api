import { ParseJSON } from "../../data/usecases/parse-json";
import { ValidateFourtyFourConssectionary } from "../../data/usecases/conssectionary/fourty-four/validate/validate-fourty-four-conssectionary";
import { ValidateFourtyFourConssectionaryVerifyDigit } from "../../data/usecases/conssectionary/fourty-four/validate/validate-fourty-four-conssectionary-verify-digit";
import { GetFourtyFourConssectionaryConssectionaryData } from "../../data/usecases/conssectionary/fourty-four/get-fourty-four-conssectionary-splitted-data";
import { GetValue } from "../../data/usecases/get-value"; 
import { GetFourtyFourConssectionarySynonymousCode } from "../../data/usecases/conssectionary/fourty-four/get-fourty-four-conssectionary-synonymous-code"; 

export function makeFourtyFour(value: string) {
    const validateFourtyFourConssectionary = new ValidateFourtyFourConssectionary();
    const validateFourtyFourConssectionaryVerifyDigit = new ValidateFourtyFourConssectionaryVerifyDigit();
    const getFourtyFourConssectionaryData = new GetFourtyFourConssectionaryConssectionaryData();
    const getValue = new GetValue();
    const getFourtyFourConssectionarySynonymousCode = new GetFourtyFourConssectionarySynonymousCode();
    const digitableLine = new ParseJSON({
        validateUsecase: validateFourtyFourConssectionary,
        validateVerifyDigitsUsecase: validateFourtyFourConssectionaryVerifyDigit,
        getDataUsecase: getFourtyFourConssectionaryData,
        getValueUsecase: getValue,
        getSynonymousCodeUsecase: getFourtyFourConssectionarySynonymousCode,
    });
    
    return digitableLine.run(value);
}