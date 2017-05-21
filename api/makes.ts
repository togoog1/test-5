import express = require('express');
let router = express.Router();

let makes = [
  {id:1, name:'BMW'},
  {id:2, name:'Tesla'},
  {id:3, name:'Mini Cooper'}
];

/* GET all makes */
router.get('/makes', function(req, res, next) {
  res.json(makes);
});



//trying new
router.get('/makes/name/:name', function(req, res, next) {
    let search = req.params['search'];
    let matches = makes.filter((car)=>{
      return car.name.indexOf(name) == 0;
    });
    res.json(matches);
});


router.get('/makes/:id', function (req, res, next) {
    let id = parseInt(req.params['id']);
    let make = findMake(id);
    if (make) {
        res.json(makes);
    } else {
        res.sendStatus(404);
    }
});

function findMake(id:number) {
  let matches = makes.filter((make) => {
    return make.id == id;
  });
  return matches.length ? matches[0] : null;
}

//end


export = router;
