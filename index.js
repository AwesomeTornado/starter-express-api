const express = require('express')
const path = require('path');
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.sendFile(path.join(__dirname + '/Main.html'));
})
app.listen(process.env.PORT || 3000)