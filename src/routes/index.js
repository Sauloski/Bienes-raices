const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.redirect("/inicio")
})

router.get('/inicio', (req,res) => {
    res.render('index')
})

router.get('/buy', (req,res) => {
    res.render('buy')
})

router.get('/termo-blanco', (req,res) => {
    res.render('termoblanco')
})

router.get('/termo-verde', (req,res) => {
    res.render('termoverde')
})

router.get('/termo-plata', (req,res) => {
    res.render('termoplata')
})

router.get('/about', (req,res) => {
    res.render('nosotros')
})

module.exports = router