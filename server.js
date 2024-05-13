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

app.get("/roll/:number", (req, res) => {
    let number = Number(req.params.number)
    let randomIndex = Math.floor(Math.random() * number)
    if (!number) {
        res.send(`How am I supposed to choose a number between 1 and ${req.params.number}?`)
    } else {
        res.send(`You rolled a ${randomIndex}.`)
    }
})

// ? Task 3

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  app.get("/collectibles/:index", (req, res) => {
    if (!collectibles[req.params.index]) {
        res.send(`This item is not yet in stock. Check back soon!`)
    } else {
        res.send(`So, you want the ${collectibles[req.params.index].name}? For ${collectibles[req.params.index].price}, it can be yours!`)
    }
  })