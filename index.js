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
            let ind = items.findIndex((i => i.id === id))
            if(ind > -1){
                items[ind].name = name
                items[ind].lastname = lastname
                return items[ind]
            }else{
                return false
            }
        },
        delete: (id) => {
            let ind =  items.findIndex((i => i.id === id)) 
            if(ind > -1){
                items.splice(ind, 1)
                return true
            }else {return false}
        }
    }

}

module.exports = crud()
