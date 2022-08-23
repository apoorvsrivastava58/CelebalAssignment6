const fs = require("fs");
const http = require("http");
fs.mkdir("Apoorv",(err)=>{});
fs.writeFile("./Apoorv/biodata.txt","My name is Apoorv Srivastava.",(err)=>{});
fs.appendFile("./Apoorv/biodata.txt"," I am from Jaipur ",(err)=>{});
const data = fs.readFileSync("./Apoorv/biodata.txt","utf-8");
console.log(data);

const server = http.createServer((req,res)=>{
    res.end(data);
})

server.listen(5000,()=>{
    console.log("Server on 5000");
})
