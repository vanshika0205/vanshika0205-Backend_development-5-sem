let {PrismaClient} = require("./generated/prisma");
let prisma = new PrismaClient();
async function addUser(name,email,password){
 let newUser= await prisma.user.create({
    data:{
        name:name,
        email:email,
        password:password
    }
 })
 return newUser;
}
// addUser("Ritikdssds","Nidsdstesh81@gmail.com","1234")
// .then(()=>console.log("user created successfully"))
// .catch((err)=>console.log(err.message))

async function addTweet(content,userId){
    await prisma.tweet.create({
        data:{
            content:content,
            userId:userId
        }
    })
}
// addTweet("my first tweet",4)
// .then(()=> console.log("tweet is created"))


//find all tweet by user who's id is 1;

async function getUserTweet(userId){
 let tweets= await prisma.tweet.findMany({
    where:{
        userId:Number(userId)
    }
 })
 return tweets;
}

getUserTweet("1")
.then((data)=>{
    console.log(data)
})


//user who's id is 1 wants to update his tweet --> tweet id is 1

async function updateTweet(tweetid, userId, updatedContent){
    let tweet= await prisma.tweet.findUnique({
        where:{
            id:Number(tweetid)
        }
    })
    if(!tweet){
        return "tweet doesnot exit"
    }
    if(tweet.userId!=Number(userId)){
        return "user can not update this tweet"
    }
    await prisma.tweet.update({
        where:{
            id:Number(tweetid)
        },
        data:{
            content:updatedContent
        }
    })


}

// updateTweet("1","1","update tweet")
// .then(()=>{
//     console.log("tweet is updated")
// })

// create a function to delete user by id;
async function deleteUser(userId){
    await prisma.user.delete({
        where:{
            id:Number(userId)
        }
    })
    return "user deleted"
}
// deleteUser("1").
// then((data)=>{
//     console.log(data)
// })
// .catch(err=>console.log(err))


async function getUsers(){
 let allusers=await prisma.user.findMany({
    // select:{
    //     name:true,
    //     email:true,
    //     tweet:{
    //         select:{
    //             content:true
    //         }
    //     }
    // }
    include:{
        tweet:{
            select:{
                content:true
            }
        }
    }
 })
 return allusers;
}
getUsers()
.then((data)=> console.log(JSON.stringify(data,null,2)))

