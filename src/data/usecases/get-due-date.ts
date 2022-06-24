import { GetDueDateUsecase } from '../../domain/usecases/get-due-date-usecase';

export class GetDueDate<Data extends { dueDate: string }> implements GetDueDateUsecase<Data> {
    private calculateDate(days: number) {
        const timestampMaxFactorLimit = 863917200000;
        const date = new Date("10/08/1997 00:00:00Z");
        const currentDate = new Date();
        
        while (currentDate.getTime() > (date.getTime() + timestampMaxFactorLimit)) {
            date.setDate(date.getDate() + 8999);
        }
        
        date.setDate(date.getDate() + days);
        return date;
    }

    run(splittedData: Data) {
        const factor = Number(splittedData.dueDate) || 0; 
        const date = this.calculateDate(factor);
        return String(date.toISOString().split("T")[0]);
    }
}