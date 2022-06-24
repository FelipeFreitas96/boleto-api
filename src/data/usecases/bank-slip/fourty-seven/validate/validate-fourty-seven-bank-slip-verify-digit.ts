import { BankSlipData } from '../../../../../domain/entity/bank-slip-data';
import { ValidateVerifyDigitUsecase } from '../../../../../domain/usecases/validate/validate-verify-digit-usecase';

export class ValidateFourtySevenBankSlipVerifyDigit implements ValidateVerifyDigitUsecase<BankSlipData> {
    run(splittedData: BankSlipData): boolean {
        const fields = [
            splittedData.fullCampField1,
            splittedData.fullCampField2,
            splittedData.fullCampField3,
        ];

        let verifyDigits: number[] = [];
        let divisionFields: number[] = [];
        let sumFields: number[] = [];
        let currentFieldIndex = fields.length - 1;
        let currentFieldValueIndex = 1;
        let multiplier = 2;

        while (currentFieldIndex >= 0) {
            const fieldValue = fields[currentFieldIndex].at(-currentFieldValueIndex);
            const multipliedValue = Number(fieldValue) * multiplier;
            
            if (!sumFields[currentFieldIndex]) {
                sumFields[currentFieldIndex] = 0;
            } 
            
            if (multipliedValue >= 10) {
                [...String(multipliedValue)].forEach((value) => {
                    sumFields[currentFieldIndex] += Number(value);
                });
            } else {
                sumFields[currentFieldIndex] += multipliedValue;
            }

            (multiplier === 2) ?
                multiplier = 1 :
                multiplier = 2;
        
            if (currentFieldValueIndex < fields[currentFieldIndex].length) {
                currentFieldValueIndex++;
            } else {
                const divisionValue = Math.floor(sumFields[currentFieldIndex] / 10);
                const restValue = Math.floor(sumFields[currentFieldIndex] % 10);
            
                verifyDigits[currentFieldIndex] = Number(String(((divisionValue + 1) * 10) - restValue).at(-1));
                divisionFields[currentFieldIndex] = divisionValue;
                currentFieldIndex--;
                currentFieldValueIndex = 1; 
            }
        }

        if (verifyDigits[0] !== Number(splittedData.verifiyDigit[0]) ||
            verifyDigits[1] !== Number(splittedData.verifiyDigit[1]) ||
            verifyDigits[2] !== Number(splittedData.verifiyDigit[2])) {
            return false;
        }
        
        return true;
    }
}