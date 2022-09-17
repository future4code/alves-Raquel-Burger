import { Follower, IFollowerDB } from "../entites.ts/Follower";
import { BaseDatabase } from "./BaseDataBase";

const followerTable = "cookenu_followers"

export class FollowerDataBase extends BaseDatabase {

    insertFollowed = async (follower: Follower) => {

        const followerDB: IFollowerDB = {
            id: follower.getId(),
            follower_id: follower.getFollowerId(),
            followed_id: follower.getFollowedId()
        }

        await this.getConnection()
        .insert(followerDB)
        .into(followerTable)

    }
}