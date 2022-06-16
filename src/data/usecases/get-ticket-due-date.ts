import { SplittedData } from '../../domain/entity/splitted-data';
import { GetTicketDueDateUsecase } from '../../domain/usecases/get-ticket-due-date-usecase';

export class GetTicketDueDate implements GetTicketDueDateUsecase {
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

    run(splittedData: SplittedData) {
        const factor = Number(splittedData.dueDate); 
        const date = this.calculateDate(factor);
        return String(date.toISOString().split("T")[0]);
    }
}