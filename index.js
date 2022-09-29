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
        <h1>99 Bottles of Beer on the Wall</h1>
        <a href='/98'>take one down, pass it around</a>
        `)
        
})

app.get('/:number_of_bottles', (req,res) => {
    // number_of_bottles = bottlesCount
    // bottlesCount--

    if (req.params.number_of_bottles == 0) {
        res.send(
            `
            <h1>${req.params.number_of_bottles} Bottles of Beer on the Wall</h1>
            <a href='/'>Start Over</a>
            `)
    } else {
        res.send(
        `
        <h1>${req.params.number_of_bottles} Bottles of Beer on the Wall</h1>
        <a href='/${req.params.number_of_bottles -1}'>take one down, pass it around</a>
        `)
    }
})

app.listen(3000, function() {
    console.log('listening to port 3000')
})