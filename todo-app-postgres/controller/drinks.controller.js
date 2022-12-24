const db = require('../db')

class DrinksController {
    async createDrink(req, res){
        const {name, price, volume, manufacture} = req.body
        const newDrink = await db.query(`INSERT INTO drinks (name, price, volume, manufacture) VALUES ($1, $2, $3, $4) RETURNING *`, [name, price, volume, manufacture])
        return res.json(newDrink.rows[0])

    }

    async getDrinks(req, res){
        const drinks = await db.query(`SELECT * FROM drinks`)
        return res.json(drinks.rows)

    }

    async getDrink(req, res){
        const id = req.params.id
        const drink = await db.query(`SELECT * FROM drinks WHERE id=$1`, [id])
        return res.json(drink.rows[0])

    }

    async updateDrink(req, res){
        const id = req.params.id
        const {name, price, volume, manufacture} = req.body
        const drink = await db.query(`UPDATE drinks SET name= $1, price=$2, volume=$3, manufacture=$4 WHERE id = $5 RETURNING *`, [name, price, volume, manufacture, id])
        return res.json(drink.rows[0])

    }

    async deleteDrink(req, res){
        const id = req.params.id
        const drink = await db.query(`DELETE FROM drinks WHERE id=$1`, [id])
        return res.json({message: 'Deleted'})
    }
}

module.exports = new DrinksController()

