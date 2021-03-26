const student = {}
const Student = require('../models/Student')

student.getStudents = async (req, res) => {
    const students = await Student.find()
    res.json(students);
}

student.createStudent = async(req, res) => {
    const newStudent = new Student(req.body)
    await newStudent.save()
    res.send({message: 'Studente created'});
}

student.getStudent = async(req, res) => {
    const student = await Student.findById(req.params.id)
    res.send(student)
}

student.editStudent = async(req, res) => {
    await Student.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Student Update'})
}

student.deleteStudent = async(req, res) => {
   await Student.findByIdAndRemove(req.params.id)
   res.json({status: 'Student Deleted'});
}

module.exports = student;