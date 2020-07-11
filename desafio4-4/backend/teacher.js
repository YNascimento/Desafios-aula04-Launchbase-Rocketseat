const fs = require('fs')
const data = require ('./data.json')
const {age, date, grauDeEscolaridade} = require('./utils')

exports.validatePost = function(req,res){

    // validate if there is any empty fields
    for(key of Object.keys(req.body)){
        if(req.body[key] == ""){
            res.send('Please fill all the fields')
        }
    }

    // select and prepare necessary variables
    let {avatar_url, name, birth, degree, classType, subject} = req.body
    birth = Date.parse(req.body.birth)
    const createdAt = Date.now()
    const id = Number(data.teachers.length +1)

    //copy to data e write do data.json file
    data.teachers.push({id, name, avatar_url ,birth, degree, classType, subject, createdAt})
    fs.writeFile('./backend/data.json', JSON.stringify(data,null,2),function(err){
        if(err) return res.send('Writefile error')

        return res.redirect('/teachers')
    })
}

exports.show = function(req, res){

    const {id} = req.params
    const foundTeacher = data.teachers.find( function(teacher){
        return teacher.id == id
    })

    if(!foundTeacher) return res.send("invalid ID")

    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birth),
        createdAt: Intl.DateTimeFormat('pt-BR').format(foundTeacher.createdAt),
        subjects: foundTeacher.subjects.split(','),
        degree: grauDeEscolaridade(foundTeacher.degree)
    }

    return res.render('teachers/show', {teacher})
}
exports.edit = function(req,res){
    const {id} = req.params
    const foundTeacher = data.teachers.find( function(teacher){
        return teacher.id == id
    })

    if(!foundTeacher) return res.send("invalid ID")

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth),
        // subjects: foundTeacher.subjects.split(','),
        // degree: grauDeEscolaridade(foundTeacher.degree)
    }

    return res.render('teachers/edit', {teacher})
}
