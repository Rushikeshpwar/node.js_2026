const http = require('http');
const fs = require('fs');
const queryString = require('querystring');

http.createServer((req, resp) => {

    fs.readFile('html/form.html', 'UTF-8', (err, data) => {

        // If file reading fails
        if (err) {
            resp.writeHead(500, { 'Content-Type': 'text/plain' });
            resp.write("Internal server error");
            resp.end();
            return;
        }

        // Display the form
        if (req.url == "/") {
            resp.write(data);
            resp.end();

        // Handle form submission
        } else if (req.url == "/submit") {

            let dataBody = [];

            // Receive form data in chunks
            req.on('data', (chunk) => {
                dataBody.push(chunk);
            });

            // When all data is received
            req.on('end', () => {

                // Combines all received data chunks into one Buffer
                // Then converts the Buffer into a normal string
                let rawData = Buffer.concat(dataBody).toString();

                // Converts form data string into a JavaScript object
                // Example: "name=Rushikesh&age=22"
                // Result: { name: "Rushikesh", age: "22" }
                let readableData = queryString.parse(rawData);

                // Synchronously write the parsed form data to a text file
                // let dataString = "My name is  "+ readableData.name + " and my email is " + readableData.email;
                // fs.writeFileSync('text/student.txt', dataString);

                // Asynchronously write the parsed form data to a text file
               let dataString = "My name is  "+ readableData.name + " and my email is " + readableData.email;
               fs.writeFile('text/Async.txt', dataString, (err) => {
                    if (err) {
                        console.error("Error writing to file:", err);
                    } else {
                        console.log("Data written to file successfully.");
                    }
                });

                // Log the parsed form data
                console.log(dataString);

                // Send success response to browser
                resp.write('<h1>Form submitted successfully</h1>');
                resp.end();
            });
        }
    });

}).listen(7400);