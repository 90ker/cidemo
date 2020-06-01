const http = require('http')
const child_process = require('child_process')
let server = http.createServer()

server.on('request', function(req,res) {
    console.log("push")
    child_process.exec('./ci.sh', function (err, out, stderr) {
        console.log('aaaa')
        console.log(err)
        console.log(out)
    })
    res.end("one push")
})
server.listen(3000)