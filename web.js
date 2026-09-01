// Import the HTTP module → used to create the server
const http = require('http');

// Import the File System module → used to read files
const fs = require('fs');


// Create an HTTP server
http.createServer((req, resp) => {

    // Read the HTML file
    // req  → request from browser
    // resp → response sent back to browser
    fs.readFile('html/web.html', 'utf-8', (err, data) => {

        // If file reading fails → send 500 Internal Server Error
        if (err) {
            resp.writeHead(500, { "content-type": "text/plain" });
            resp.write('internal server error');
            resp.end();
            return;
        }

        // If file is read successfully → send 200 OK
        // Tell browser that the response contains HTML
        resp.writeHead(200, { "content-type": "text/html" });

        // Send the HTML file content to the browser
        resp.write(data);

        // Finish/close the response
        resp.end();
    });


// Server listens for requests on port 4500
}).listen(4500);