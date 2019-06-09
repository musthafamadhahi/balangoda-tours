const express = require('express');
const router = express.Router();
const fs = require('fs');
var multer  = require('multer')

var storage  = multer.diskStorage({
    destination: function (req, file, cb) {
        if(!fs.existsSync('./uploads/'+req.path.split('/')[1]+'/'+req.params.id)){
            fs.mkdirSync('./uploads/'+req.path.split('/')[1]+'/'+req.params.id)
        }
        cb(null, './uploads/'+req.path.split('/')[1]+'/'+req.params.id)
        
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname )
    }
  })
var upload = multer({ storage: storage })


const ctrlUser = require('../controllers/user.controller');
const ctrlLoc = require('../controllers/loc.controller');
const ctrlHotel = require('../controllers/hotel.controller');

const jwtHelper = require('../config/jwtHelper');

// User Routes
router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);

// Location Routes
router.post('/locations/add',ctrlLoc.addLocation)
router.post('/locations/images/new/:id',upload.any(), ctrlLoc.newImages)
router.post('/locations/get/:id?', ctrlLoc.getLocations)
router.post('/locations/update/:id',ctrlLoc.updateLoc)


// Package Routes

// Hotel Routes
router.post('/hotels/add', ctrlHotel.addHotel)
router.post('/hotels/images/new/:id',upload.any(), ctrlHotel.newImages)
router.post('/hotels/get/:id?', ctrlHotel.getHotel)
router.post('/hotels/update/:id',ctrlHotel.updateHotel)

module.exports = router;



