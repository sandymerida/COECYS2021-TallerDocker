const{ Router } = require('express');
const router = Router();

const student = require('../controllers/students.controller')

router.get('/', student.getStudents);

router.post('/', student.createStudent);

router.get('/:id', student.getStudent);

router.put('/:id', student.editStudent);

router.delete('/:id', student.deleteStudent);

module.exports = router;