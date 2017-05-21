"use strict";
var express = require("express");
var router = express.Router();
var makes = [
    { id: 1, name: 'BMW' },
    { id: 2, name: 'Tesla' },
    { id: 3, name: 'Mini Cooper' }
];
router.get('/makes', function (req, res, next) {
    res.json(makes);
});
router.get('/makes/name/:name', function (req, res, next) {
    var search = req.params['search'];
    var matches = makes.filter(function (car) {
        return car.name.indexOf(name) == 0;
    });
    res.json(matches);
});
router.get('/makes/:id', function (req, res, next) {
    var id = parseInt(req.params['id']);
    var make = findMake(id);
    if (make) {
        res.json(makes);
    }
    else {
        res.sendStatus(404);
    }
});
function findMake(id) {
    var matches = makes.filter(function (make) {
        return make.id == id;
    });
    return matches.length ? matches[0] : null;
}
module.exports = router;
