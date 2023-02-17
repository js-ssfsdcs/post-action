const port = process.env.PORT || 5000
const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get(['/', '/checks'], function (req, res) {
    res.send('POST your form action here!')
})

app.post(['/','/accepts'], function (req, res) {
  
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    
    var logTxt = 'FORM SUBMISSION: '
    var txt = '<style>table, th, td { border: 1px solid black; border-collapse: collapse; } th, td { padding: 10px; </style><h3>Form submission</h3> <table>'
    
    
    for(n in req.body) {
        logTxt += n + '=' + req.body[n] + ','
        txt += '<tr><td><strong>' + n + '</strong></td><td>' + req.body[n] + '</td></tr>'
    }

    txt += '</table>'
    console.log(logTxt)
    res.send(txt)
})

app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
