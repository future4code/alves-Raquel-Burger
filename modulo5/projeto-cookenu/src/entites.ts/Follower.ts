export interface IFollowerDB {
    id: string,
    follower_id: string,
    followed_id: string
}

export class Follower {
    private id: string
    private follower_id: string
    private followed_id: string

    constructor(
        id: string,
        follower_id: string,
        followed_id: string
    ){
        this.id = id
        this.follower_id = follower_id
        this.followed_id = followed_id
    }

    public getId(){
        return this.id
    }
    public getFollowerId() {
        return this.follower_id
    }
    public getFollowedId() {
        return this.followed_id
    }
}