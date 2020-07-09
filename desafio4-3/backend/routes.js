const express = require('express')
const routes = express.Router()
const registerTeacher = require('./teacher')

routes.get('/',function(req,res){
    return res.redirect('./teachers')
})

routes.get('/teachers',function(req,res){
    return res.render('teachers/index')
})

routes.post('/teachers', registerTeacher.validatePost)

routes.get('/teachers/create',function(req,res){
    return res.render('teachers/create')
})

routes.get('students', function(req,res){
    return res.render('students/index')
})

module.exports = routes