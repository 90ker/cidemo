const http = require('http')
const child_process = require('child_process')
let server = http.createServer((req,res)=>{
    child_process.exec('./ci.sh',(err,out,stderr)=>{
        console.log(out,err)
    })
    res.end("one push")
});
server.listen(3000)