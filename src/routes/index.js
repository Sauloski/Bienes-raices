const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.redirect("/inicio")
})

router.get('/inicio', (req,res) => {
    res.render('index')
})

module.exports = router