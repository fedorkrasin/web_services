const Router = require('express')
const router  = new Router()
const DrinksController = require('../controller/drinks.controller')

router.post('/drink', DrinksController.createDrink)
router.get('/drink', DrinksController.getDrinks)
router.get('/drink/:id', DrinksController.getDrink)
router.put('/drink/:id', DrinksController.updateDrink)
router.delete('/drink/:id', DrinksController.deleteDrink)


module.exports = router