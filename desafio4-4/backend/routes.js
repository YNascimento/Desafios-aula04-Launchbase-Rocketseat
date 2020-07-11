const express = require('express')
const routes = express.Router()
const teacher = require('./teacher')

//home
routes.get('/',function(req,res){
    return res.redirect('./teachers')
})

//index Teachers
routes.get('/teachers',function(req,res){
    return res.render('teachers/index')
})

//Create Teacher
routes.get('/teachers/create',function(req,res){
    return res.render('teachers/create')
})

//POST back from create
routes.post('/teachers', teacher.validatePost)

//edit teacher info
routes.get('/teachers/:id/edit', teacher.edit)

//Show Teacher
routes.get('/teachers/:id', teacher.show)

//index Students
routes.get('students', function(req,res){
    return res.render('students/index')
})

module.exports = routes