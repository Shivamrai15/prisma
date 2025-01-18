// Creating users
import { db } from "./db"
import { Gender, PostType } from "@prisma/client"

const createUser = async()=> {
    // const user = await db.user.create({
    //     data : {
    //         email : "chiragj2019@gmail.com",
    //         password : "password",
    //         gender : Gender.MALE
    //     },
    //     select : {
    //        id : true,
    //        email : true,
    //        name : true,
    //        _count : {
    //         select : {
    //             comments : true,
    //             likes : true
    //         }
    //        },
    //     }
    // });

    // await db.user.create({
    //     data : {
    //         email : "utkarsh@gmail.com",
    //         password : "password",
    //         name : "Utkarsh Rawat"
    //     },
    // })

    const user = await db.user.create({
        data : {
            email : "shivamrai@gmail.com",
            password : "password"
        },
        include : {
            comments : true,
            posts : true
        }
    })

    console.log(user);
}


const createPost = async () => {
    const post = await db.post.create({
        data : {
            content : "url",
            category : PostType.IMAGE,
            userId : "678c063ac2015951e9f4058e"
        },
    })

    console.log(post);
}


const createComment = async () => {
    const comment = await db.comment.create({
        data : {
            message : "Sexy joshi",
            userId : "678c06f96ac670d73ee356c7",
            postId : "678c08c29e195d23fc04a0d4"
        }
    });

    console.log(comment);
}

createComment();

// createPost();


// createUser();