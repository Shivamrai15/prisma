import { db } from "./db";
import { PostType } from "@prisma/client";

const getUserData = async () => {
    // const user = await db.user.findUnique({
    //     where : {
    //         id : "678c063ac2015951e9f4058e",
    //     },
    //     select : {
    //         id : true,
    //         name : true,
    //         _count : {
    //             select : {
    //                 posts : true,
    //                 likes : true
    //             },
    //         },
    //         posts : {
    //             where : {
    //                 category : PostType.REEL
    //             },
    //             include : {
    //                 _count : {
    //                     select : {
    //                         likes : true,
    //                         comments : true
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // });

    // const user = await db.user.findFirst({
    //     where : {
    //         name : {
    //             startsWith : "ut"
    //         }
    //     }
    // })

    // console.log(user);
}



// getUserData();


// Order and limit

const getUserDataWithOrder = async () => {
    const user = await db.user.findUnique({
        where : {
            id : "678d3dc5fc7090879d453dcf",
        },
        select : {
            posts : {
                include : {
                    _count : {
                        select : {
                            likes : true,
                            comments : true
                        }
                    }
                },
                orderBy : {
                    createdAt : "desc"
                },
                take : 2
            }
        }
    });

    console.log(user);
}


getUserDataWithOrder();
