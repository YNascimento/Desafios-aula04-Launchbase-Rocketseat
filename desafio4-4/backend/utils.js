module.exports = {
    age: function(timestamp){
        const today = new Date() // formato de data- Hj
        const birthDate = new Date(timestamp) //formato de data -Birth

        let age = today.getFullYear() - birthDate.getFullYear() // idade em anos
        let month = today.getMonth() - birthDate.getMonth() //checa se mes de niver já passou

        if(month < 0 || month == 0 && today.getDate < birthDate.Date()){
            age = age - 1
        }
        return age
    },
    date: function(timestamp){
        const date = new Date(timestamp)
        
        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return (`${year}-${month}-${day}`)
    },
    grauDeEscolaridade: function(degree){
        
        if(degree =='high-school')
            return 'Nivel Médio Completo'

        else if(degree =='college')
            return 'Nivel Superior Completo'

        else if(degree =='master')
            return 'Mestrado Completo'

        else if(degree =='doctor')
            return 'Doutorado Completo'
        
        else return "Não preenchido"
    }
}