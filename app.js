/***const a=12
const names=require("./lib")
names.kl.sayhi(names.kl.a)
if (a<10){
    console.log("ff")
}
else {
    //console.log(require)
}
const namea="jo"
const zzz=`kkk ${namea}`
console.log(zzz)
setInterval(()=>{console.log("aa")},1000)
console.log("bbb")

const sayHi=(name)=>{console.log('hello ${name} ')}
sayHi("li")***/

/*const os =require('os')
const user=os.userInfo()
const currentos={name:os.type(),release:os.release(),totalmem:os.totalmem(),free:os.freemem()}
console.log(currentos)
console.log(`${os.uptime()}`)*/
/*const path =require('path')
console.log("1")
const fs=require('fs') 
console.log("2")
const first = fs.readFileSync("./content/first.txt","utf8")
console.log("3")
const data="asadsda"
fs.writeFileSync("./content/result.txt",data)*/
const http =require('http')

const server = http.createServer((req,res)=>
{
    res.write("welcome");
    res.end();
})

server.listen(5000)