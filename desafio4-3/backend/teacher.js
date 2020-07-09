const fs = require('fs')
const data = require ('./data.json')

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
    data.teachers.push({id, name, birth, degree, classType, subject, createdAt})
    fs.writeFile('./backend/data.json', JSON.stringify(data,null,2),function(err){
        if(err) return res.send('Writefile error')

        return res.redirect('/teachers')
    })
}