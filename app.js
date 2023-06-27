const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

const AppointmentController = require('./controller/AppointmentController')
const PatientController = require('./controller/PatientController')
const Registration = require('./controller/Registration')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use('/appointments', AppointmentController)
app.use('/patients', PatientController)
app.use('/registration', Registration)
app.listen(process.env.PORT, () => {
	console.log(
		'Project url: https://' + process.env.PORT + '.sock.hicounselor.com'
	)
})
