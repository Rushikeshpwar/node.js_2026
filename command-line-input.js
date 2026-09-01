const http = require('http');

const arg = process.argv;
console.log(arg[2]);

http.createServer((req, resp)=> {
 
    resp.write("<h4> Hello World rushikesh</h4>");
    resp.end();
}). listen(4800);