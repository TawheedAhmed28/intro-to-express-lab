const express = require("express")

const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("Hello there!")
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

// ? Task 1

app.get("/greetings/:username", (req, res) => {
    res.send(`It's a pleasure to meet you, ${req.params.username}.`)
})

// ? Task 2

