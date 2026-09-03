function userForm (req , resp){
    resp.writeHead(200 , {'Content-Type': "Text/html"});
    resp.write(`
         <form action= "/submit" method="POST">
       <input type="text" name="name" placeholder="Enter your name">
       <br>
        <br>
         <input type="email" name="email" placeholder="Enter your email">
         <Br>
         <input type="submit" value="Submit">
         </form>
        `);
  


}
module.exports = userForm;