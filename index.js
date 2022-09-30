//loads express
const express = require('express')
//creates express app
const app = express()
// let bottlesCount

app.get('/', (req, res) => {
    // bottlesCount = 99
    // bottlesCount--
    
    res.send(
        `
        <h1>99 lines of code to debug</h1>
        <h1>99 lines of code</h1>
        <a href='/98'>look at one now, patch it around</a>
        <h1>98 lines of code to debug</h1>
        `)
        
})

app.get('/:number_of_bottles', (req,res) => {
    let bottlesCount = parseInt(req.params.number_of_bottles)
    let randomUp = 0.3
    let randomDown = 0.2
    let randomNum = Math.floor(Math.random() * 50)
    // bottlesCount--

    if (bottlesCount <= 0) {
        res.send(
            `
            <h1>Yay!!!!! You fixed it</h1>
            <h2>${bottlesCount} lines of code to debug!</h2>
            <a href='/'>Look at next project</a>
            `)
            // <a href='/${Math.floor(Math.random) * 100}'>Look at next project</a>
    } else if (Math.random() < randomUp) {
        let randomBottles = bottlesCount + randomNum
        console.log(randomBottles)
        res.send(
            `
            <h1>${bottlesCount} lines of code to debug</h1>
            <h1>${bottlesCount} lines of code</h1>
            <a href='${randomBottles}'>look at one now, patch it around</a>
            <h1>Crap! WHAT DID I DO? ${randomBottles} lines of code to debug</h1>
            `)
    } else if (Math.random() < randomDown) {
        let randomBottles = bottlesCount - randomNum
        res.send(
            `
            <h1>${bottlesCount} lines of code to debug</h1>
            <h1>${bottlesCount} lines of code</h1>
            <a href='${randomBottles}'>look at one now, patch it around</a>
            <h1>OH SWEET! ${randomBottles} lines of code to debug</h1>
            `)
    }

    {
        res.send(
        `
        <h1>${bottlesCount} lines of code to debug</h1>
            <h1>${bottlesCount} lines of code</h1>
            <a href='${bottlesCount - 1}'>look at one now, patch it around</a>
            <h1>${bottlesCount - 1} lines of code to debug</h1>
        `)
    }
})

app.listen(3000, function() {
    console.log('listening to port 3000')
})