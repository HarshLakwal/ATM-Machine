const express = require('express')
const session = require('express-session');
const cookie = require("cookie-parser")
const atm = express();

const path = require("path")
const mainRouter = require("./Routes/mainRouter.js")
const Options = require("./Routes/options")

atm.set("view engine","ejs");
atm.use(express.static(path.resolve(__dirname,"public")));
atm.use(express.urlencoded());
atm.use(cookie())
atm.use(session({secret:"HarshBank"}));
atm.use(mainRouter);
atm.use(Options);


atm.listen(2000,()=>{
    console.log("Server running On http://localhost:2000")
})