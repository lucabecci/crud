const crud = function () {

    let items = [
        {id: 1, name: "John", lastname: "Doe"},
        {id: 2, name: "Jane", lastname: "Doe"},
    ]

    let autoincrement = 3

    return {
        create: (name, lastname) => {
            items.push({ id: autoincrement, name, lastname })
            autoincrement++
            return items[autoincrement - 2]
        },
        read: (id) => {
            let usr = items.find(i => i.id === id ? i : null)
            if (usr) {return usr} else {return null}
        },
        update: (id, name, lastname) => {
            let indexUsr = items.findIndex((i => i.id === id))
            if(indexUsr > -1){
                items[indexUsr].name = name
                items[indexUsr].lastname = lastname
                return items[indexUsr]
            }else{
                return false
            }
        },
        delete: (id) => {
            let indexUsr =  items.findIndex((i => i.id === id)) 
            if(indexUsr > -1){
                items.splice(indexUsr, 1)
                return true
            }else {return false}
        }
    }

}

module.exports = crud()
