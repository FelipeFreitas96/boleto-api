import { ParseJSON } from "../../data/usecases/parse-json";
import { ValidateFourtyEightConssectionary } from "../../data/usecases/conssectionary/fourty-eight/validate/validate-fourty-eight-conssectionary";
import { ValidateFourtyEightConssectionaryVerifyDigit } from "../../data/usecases/conssectionary/fourty-eight/validate/validate-fourty-eight-conssectionary-verify-digit";
import { GetFourtyEightConssectionaryConssectionaryData } from "../../data/usecases/conssectionary/fourty-eight/get-fourty-eight-conssectionary-splitted-data";
import { GetValue } from "../../data/usecases/get-value"; 
import { GetFourtyEightConssectionarySynonymousCode } from "../../data/usecases/conssectionary/fourty-eight/get-fourty-eight-conssectionary-synonymous-code"; 

export function makeFourtyEight(value: string) {
    const validateFourtyEightConssectionary = new ValidateFourtyEightConssectionary();
    const validateFourtyEightConssectionaryVerifyDigit = new ValidateFourtyEightConssectionaryVerifyDigit();
    const getFourtyEightConssectionaryConssectionaryData = new GetFourtyEightConssectionaryConssectionaryData();
    const getValue = new GetValue();
    const getFourtyEightConssectionarySynonymousCode = new GetFourtyEightConssectionarySynonymousCode();
    const digitableLine = new ParseJSON({
        validateUsecase: validateFourtyEightConssectionary,
        validateVerifyDigitsUsecase: validateFourtyEightConssectionaryVerifyDigit,
        getDataUsecase: getFourtyEightConssectionaryConssectionaryData,
        getValueUsecase: getValue,
        getSynonymousCodeUsecase: getFourtyEightConssectionarySynonymousCode,
    });
    
    return digitableLine.run(value);
}