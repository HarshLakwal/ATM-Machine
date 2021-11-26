const router = require("express").Router();
const loginRegister = require("../models/loginRegisterModel");

router.post("/creatAccount", (req, res) => {
    loginRegister.creatAccount(req.body, (result) => {
        
        req.session.acc = req.body;
        
        res.redirect("/login")
    })
})
router.post("/login", (req, res) => {
    loginRegister.verification(req.body,(user) => {
        if (user) {
            req.session.user = user;
            
            res.redirect("Language")
        }
        else {
            res.redirect("/login")
        }
    })
})
router.get("/", (req, res) => {
    res.render("creatAccount")
})
router.get("/login", (req, res) => {

    res.render("Login")
})
router.get("/Language", (req, res) => {
    res.render("Language")
})

router.get("/Hindi", (req, res) => {
    res.render("hindi")
})

module.exports = router