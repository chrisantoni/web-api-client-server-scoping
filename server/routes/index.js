var express = require('express');
var router = express.Router();
var controllerMeals = require('../controller/mealController')
/* GET home page. */
router.get('/meals',controllerMeals.data)

module.exports = router;
