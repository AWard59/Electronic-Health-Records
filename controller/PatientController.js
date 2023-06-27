const express = require('express')
const router = express.Router()
const PatientService = require('../service/PatientService')
const AppointmentService = require('../service/AppointmentService')
const NotesService = require('../service/NotesService')

router.get('/', async (req, res) => {
	res.render('patient-search')
})
router.get('/:id', async (req, res) => {
	res.render('patient-details')
})
router.get('/edit/:id', async (req, res) => {
	res.render('edit-patient')
})
router.post('/update/:id', async (req, res) => {
	res.render('message-page')
})
router.get('/notes/view/:id', async (req, res) => {
	res.render('notes-page')
})
router.get('/notes/add/:id', async (req, res) => {
	res.render('add-note')
})
router.post('/notes/add/:id', async (req, res) => {
	res.redirect(`/patients/notes/view/${req.params.id}`)
})
router.get('/appointments/:patientId', async (req, res) => {
	res.render('appointmentList')
})
router.get('/appointment/reschedule/:appointmentId', async (req, res) => {
	res.render('rescheduleForm')
})
router.post('/appointment/reschedule/:appointmentId', async (req, res) => {
	res.render('message-page')
})
router.post('/appointment/delete', async (req, res) => {
	res.redirect(`/patients/${patient_id}`)
})
module.exports = router
