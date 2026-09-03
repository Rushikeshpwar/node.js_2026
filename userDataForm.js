const queryString = require("querystring");
const fs = require("fs");

function userDataForm(req, resp) {

    let dataBody = [];

    // Receive form data
    req.on("data", (chunk) => {
        dataBody.push(chunk);
    });

    // When all data is received
    req.on("end", () => {

        let rawData = Buffer.concat(dataBody).toString();

        // Convert form data into an object
        let readableData = queryString.parse(rawData);

        let dataString =
            "My name is " + readableData.name +
            " and my email is " + readableData.email;

        // Save data into a file
        fs.writeFile("text/Async.txt", dataString, (err) => {

            if (err) {
                console.error("Error writing to file:", err);
                return;
            }

            console.log("Data written to file successfully.");
        });

        resp.writeHead(200, {
            "Content-Type": "text/html"
        });

        resp.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Form Data Submit</title>
            </head>
            <body>

                <h1>Form Data Submitted Successfully</h1>
                <p>${dataString}</p>

                <a href="/">Go back to form</a>

            </body>
            </html>
        `);

        resp.end();
    });
}

module.exports = userDataForm;