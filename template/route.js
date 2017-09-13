"use strict";
var express = require('express');
var router = express.Router();
var <%= object %>sController = require('../controllers/<%= service %>s');

var service = '<%= object %>s';

// get <%= object %>s or search <%= object %>s
router.get('/'+service, <%= object %>sController.find);

// get <%= object %>
router.get('/'+service+'/:id', <%= object %>sController.findOne);

// To add validation, add a middlewave like the below. Works for just POST calls only
// function(req,res,next){
//     req._required = [ // _required should contain all the fails that are required
//     'name',
//     'name2'
//     ];

//     next();
// }

// create <%= object %>(s) a single <%= object %> object will create one <%= object %> while an array of <%= object %>s will create multiple <%= object %>s
router.post('/'+service, <%= object %>sController.create);

// update all records that matches the query
router.put('/'+service, <%= object %>sController.update);

// update a single record
router.patch('/'+service+'/:id', <%= object %>sController.updateOne);

// delete all records that matches the query
router.delete('/'+service, <%= object %>sController.delete);

// Delete a single record
router.delete('/'+service+'/:id', <%= object %>sController.deleteOne);

// restore a previously deleted record
router.post('/'+service+'/:id/restore', <%= object %>sController.restore);

module.exports = router;
