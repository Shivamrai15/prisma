import { db } from "./db";
import { PostType } from "@prisma/client";

const getUserData = async () => {
    const user = await db.user.findUnique({
        where : {
            id : "678c063ac2015951e9f4058e",
        },
        select : {
            id : true,
            name : true,
            _count : {
                select : {
                    posts : true,
                    likes : true
                },
            },
            posts : {
                where : {
                    category : PostType.REEL
                },
                include : {
                    _count : {
                        select : {
                            likes : true,
                            comments : true
                        }
                    }
                }
            }
        }
    });

    console.log(user);
}

getUserData();