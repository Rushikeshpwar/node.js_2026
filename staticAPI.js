const http = require('http');


const demoData =[
        {
            userName : "Rushikesh",
            age: 22,
            email: "rushikesh@gmail.com",
        },
        {
            userName : "Rusvivekikesh",
            age: 22,
            email: "rushikesh@gmail.com",
        },
        {
            userName : "omakresh",
            age: 22,
            email: "rushikesh@gmail.com",
        },
    ]

http.createServer((req , resp) => {
    resp.setHeader('Content-type', 'text/json');
    resp.write(JSON.stringify(demoData));
    resp.end();
}).listen(4300);