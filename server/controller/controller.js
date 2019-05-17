module.exports = {
// app.get('/api/inventory',controller.getAll )
    getAll: (req,res) => {
        db = req.app.get('db')
        db.get_inventory()
        .then(inventory => {
            res.send(inventory)
        })
        .catch(err => console.log(err))
    },
    // app.post('/api/product', controller.addProduct)
    addProduct: (req,res) => {
        let {name, price, img} = req.body
        price = +price
        console.log({name, price, img})
        db = req.app.get('db')
        db.create_product({name,price,img})
        .then(answer => res.send(answer))
        .catch(err => console.log(err))
    },
    //app.delete('/api/product', controller.deleteProduct)
    deleteProduct: (req,res) => {
        let id = req.params.id
        let db = req.app.get('db')
        db.delete_product({id})
        .then(answer => res.sendStatus(200))
        .catch(err => console.log(err))
    },
    // app.put('/api/product/', controller.updateProduct)
    updateProduct: (req,res) => {
        let {price, name, img, id} = req.body
        price = +price
        id = +id
        let db = req.app.get('db')
        db.update_product({price, name, img, id})
        .then(answer => res.sendStatus(200))
        .catch(err => console.log(err))
    }

}