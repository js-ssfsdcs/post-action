const port = process.env.PORT || 5000
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

function allowCORS(response) {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
}

app.use(bodyParser.urlencoded({ extended: true }));

app.get(['/', '/checks'], function (request, response) {
    response.send('POST your form action here!')
})

app.post(['/','/accepts'], function (request, response) {

    let logText = 'FORM SUBMISSION: '
    let html = `<style>
                    table, th, td { 
                        border: 1px solid black; 
                        border-collapse: collapse; 
                    } 
                    
                    th, td { 
                        padding: 10px; 
                    }
                </style>
                <h3>Form submission</h3> 
                <table>`
    
    for(key in request.body) {
        logText += `${key}=${request.body[key]},`
        html += `<tr>
                    <td><strong>${key}</strong></td>
                    <td>${request.body[key]}</td>
                 </tr>`
    }
    html += '</table>'

    console.log(logText)
    allowCORS(response)
    response.send(html)
})

app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
