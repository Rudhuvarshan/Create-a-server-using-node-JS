const ht = require('http');
const serv = ht.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('COntent-Type','text/plain');
    res.end("Server created successfully")
});
server.listen(5000,()=>{
    Console.log("server port 5000");
});