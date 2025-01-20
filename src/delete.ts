import { db } from "./db";

const deleteUser = async()=> {
    const users = await db.user.deleteMany ({
        where: {
            id : {
                in : ["678c063ac2015951e9f4058e", "678c063ac2015951e9f4058f"]
            }
        }
    })

    console.log(users);
}

deleteUser();