export interface ValidateTicketUsecase {
    run: (digitableLine: string) => boolean;
}