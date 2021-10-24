const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.use(require('./routes/index'))

app.listen(port, () => {
    console.log(`server on port: ${port}`)
})