const users = [
  { firstName: "akshay", age: 26 },
  { firstName: "donald", age: 75 },
  { firstName: "elon", age: 50 },
  { firstName: "deepika", age: 26 }
];

let a=users.reduce((acc, user) => {if(user.age>30){acc.push(user.firstName)} return acc},[]);

const b= new Promise((resolve,reject)=>{
    setTimeout(()=>{reject("error world")},2000)
})
const d=new Promise((resolve,reject)=>{
    setTimeout(()=>{reject("hello world")},3000)
})
const c=Promise.race([d,b]).then((values)=>{
    console.log(values)
}).catch((err)=>{console.error(err)
});
console.log(c)
let name={a:"akshay",b:"deepika",c:"donald",d:function (){
    console.log(this.a,this.b,this.c)
}};
let name1={a:"aky",b:"deep"}
