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

app.get('/:number_of_bugs', (req,res) => {
    let bugsCount = parseInt(req.params.number_of_bugs)
    let randomNum = Math.floor(Math.random() * 50)
    // bottlesCount--

    if (bugsCount <= 0) {
        res.send(
            `
            <h1>Yay!!!!! You fixed it</h1>
            <h2>${bugsCount} lines of code to debug!</h2>
            <a href='/'>Look at next project</a>
            `)
            // <a href='/${Math.floor(Math.random) * 100}'>Look at next project</a>
    } else if (Math.random() < .3) {
        let randomBugs = bugsCount + randomNum
        // console.log(randomBugs)
        res.send(
            `
            <h1>${bugsCount} lines of code to debug</h1>
            <h1>${bugsCount} lines of code</h1>
            <a href='${randomBugs}'>look at one now, patch it around</a>
            <h1>Crap! WHAT DID I DO? ${randomBugs} lines of code to debug</h1>
            `)
    } else if (Math.random() < .2) {
        let randomBugs = bugsCount - randomNum
        res.send(
            `
            <h1>${bugsCount} lines of code to debug</h1>
            <h1>${bugsCount} lines of code</h1>
            <a href='${bugsCount - 1}'>look at one now, patch it around</a>
            <h1>${bugsCount - 1} lines of code to debug</h1>
            `)
    } else if (Math.random() < .1 && bugsCount >150) {
        
        res.send(
            `
            <h1>${bugsCount / 2} lines of code to debug</h1>
            <h1>${bugsCount / 2} lines of code</h1>
            <a href='${(bugsCount / 2) - 1}'>look at one now, patch it around</a>
            <h1>${(bugsCount / 2) - 1} lines of code to debug</h1>
            `)
    } else if (Math.random() < .1 && bugsCount >400) {
        
        res.send(
            `
            <h1>Woah! That one line of code was messing a bunch up!</h1>
            <h2>0 lines of code to debug!</h2>
            <a href='/'>Look at next project</a>
            `)
    } else {

        res.send(
            `
            <h1>${bugsCount} lines of code to debug</h1>
            <h1>${bugsCount} lines of code</h1>
            <a href='${bugsCount - 1}'>look at one now, patch it around</a>
            <h1>${bugsCount - 1} lines of code to debug</h1>
        `)
    }

})

app.listen(3000, function() {
    console.log('listening to port 3000')
})