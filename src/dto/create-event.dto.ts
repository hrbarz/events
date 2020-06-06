export class CreateEventDto {
    readonly title: string;
    readonly description: string;
    readonly status: string;
    readonly limit: number;
    readonly start_at: Date;
    readonly end_at: Date;
}
