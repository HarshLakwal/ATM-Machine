const router = require("express").Router();

const infoListModel = require("../models/infoListModel");
const depositModel = require("../models/depositModel");
const withdrawModel = require("../models/withdrawModel");
const pinChange = require("../models/pinChangeModel");


router.get('/english', (req, res) => {
    res.render("Menu", {

    })
})
router.get("/myAccountinfo", (req, res) => {
    var id = req.session.user._id;
    infoListModel.showInfo(id, (data) => {

        req.session.list = data;

        res.render("accountInfo", {
            result: data
        })
    })
})
router.get("/Deposit", (req, res) => {
    res.render("Deposit")
})
router.post("/deposit", (req, res) => {
    var total = parseInt(req.session.user.amount) + parseInt(req.body.amount)
    console.log("list-amount-debit", req.session.list.amount)
    if (req.body.account == req.session.user._id) {
        depositModel.moneyDeposit(req.session.user._id, total, (result, err) => {
            if (result) {
                res.redirect("/myAccountinfo")

            }
        })
    }
    else {
        console.log("Something is wrong")
        res.redirect("/Deposit")
    }
})
router.get("/Withdrawal", (req, res) => {

    res.render("Withdrawal")

})
router.post("/widhdraw", (req, res) => {

    withdrawModel.debit(req.session.user._id, req.body.withdraw, req.session.list.amount, (result, err) => {

        if (result) {
            res.redirect("/myAccountinfo")
        }
        else {
            res.redirect("/Withdrawal")
        }
    })
})
router.get("/pinChange", (req, res) => {
    res.render("ChangePin",{
        
    })
})
router.post("/pinChange", (req, res) => {
    var id = req.session.user._id
    var data = req.body.newPin
    var oldPin = req.body.oldPin
    var orgPassword = req.session.user.password
    pinChange.changePin(id, data, orgPassword,oldPin,(result, err) => {
        
        if (err) {
            res.redirect("/pinChange")
        }
        else {
            
            res.redirect("/login")
        }
    })
})
module.exports = router;