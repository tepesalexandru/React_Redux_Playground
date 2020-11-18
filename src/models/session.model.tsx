export type Session = {
    id: number;
    title: string;
    speaker: string;
    time: string;
    room: string;
    description: string;
    vote: number;
    isMostVoted: boolean;
}