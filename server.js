const express = require('express')
const PORT = 3530

const app = express()

// body parser middleware config
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


//ejs settings
app.set('view engine', 'ejs')
app.set('views', './view')

//default route
app.use(`/`, require('./route/userRoute'))

// server listen
app.listen(PORT, () => {
    console.log(`server started and live @ http://localhost:${PORT}`)
})