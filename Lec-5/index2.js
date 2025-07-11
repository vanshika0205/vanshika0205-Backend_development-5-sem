// let p = new Promise((resolve, reject)=>{
//     resolve("okay");
// })
// console.log(p);
// p.then((data)=>{
//     console.log(data);
//     console.log("ur promise is completed")
// })
// .catch((err)=>{
//     console.log(err);
// })

let users=[
    {
        id:1,
        age:16,
        name:"yashu"
    },
    {
        id:2,
        age:20,
        name:"yashu2"
    }
]


function isEligible(id){ //by default it is synchronous and after putting this code in promise it became asynchronous 
    //find user in db
    //check age is greater or equal to 18
    //if else
    return new Promise((resolve,reject)=>{
        let user = users.filter((user)=> user.id==id);
        if(!user){
            return reject( "no user found");
        }
        if(user.age>=18){
            return resolve("eligible to vote");
        }
        else{
            return reject("not eligible to vote");
        }
    })
}
isEligible(1).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
console.log("Hi");
console.log("bye");