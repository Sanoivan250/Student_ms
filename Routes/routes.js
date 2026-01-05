const express = require('express');
const router = express.Router();
const Student = require('../models/student');

router.post('/send', async (req, res) => {
    try{
        const student= new Student(req.body)
        await student.save()
        res.status(200).json(student)
    } catch (err) {
        res.status(404).json({ message: error.message });
    }
})
// display all students
router.get('/all', async (req, res) => {
    try {
        const students = await Student.find()
        res.status(200).json(students)
    } catch (err) {
        res.status(404).json({ message: error.message });
    }
})

router.put('/update/:id', async (req, res) => {
    try {
       const { id }= req.params;
       const student= await Student.findByIdAndUpdate(id,req.body,{new:true})
       res.status(200).json(student)
    } catch (err) {
        res.status(404).json({ message: error.message });
    }   })

router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Student.findByIdAndDelete(id);
        res.status(200).json({ message: "Student deleted successfully" });
    } catch (err) {
        res.status(404).json({ message: error.message });
    } })

module.exports = router