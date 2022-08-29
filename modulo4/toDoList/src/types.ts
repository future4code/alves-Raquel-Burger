export type User = {
    id: string,
    name: string,
    nickname: string,
    email: string
}

export type Task = {
    id: string,
    title: string;
    description: string;
    limit_date: Date;
    creator_user_id: Number;
}