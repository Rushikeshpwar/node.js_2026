const http = require('http');
const fs = require('fs');

http.createServer((req, resp) => {

    fs.readFile('html/form.html', 'UTF-8', (err, data) => {

        if (err) {
            resp.writeHead(500, { 'Content-Type': 'text/plain' });
            resp.write("Internal server error");
            resp.end();
            return;
        }

        if (req.url == "/") {
            resp.write(data);

        } else if (req.url == "/submit") {
            resp.write('<h1>Form submitted successfully</h1>');
        }

        resp.end();
    });

}).listen(7400);


// Below Create Form from internal html 

// http.createServer((req , resp)=>{

//     resp.writeHead(200, {'Content-Type':'text/html'});
//     console.log(req.url);


//     if(req.url == "/"){

//         resp.write(`
//         <form action= "/submit" method="POST">
//         <input type="text" name="name" placeholder="Enter your name">
//         <br>
//         <br>
//         <input type="email" name="email" placeholder="Enter your email">
//         <Br>
//         <input type="submit" value="Submit">
//         </form>
//         `);

//     } 
//     else if (req.url =="/submit"){

//         resp.write('<h1>Form submitted successfully</h1>');
//     }
    
//     resp.end();

// }).listen(7800);