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
const ctrlPackage = require('../controllers/pkg.controller')
const ctrlTour =require('../controllers/tour.controller');
const ctrlGuide = require('../controllers/guide.controller');

const jwtHelper = require('../config/jwtHelper');

// Add Token Verification where needed
// User Routes
router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/guides',ctrlUser.getGuides)
router.get('/delete/:email',ctrlUser.deleteGuide)

// Location Routes
router.post('/locations/add',ctrlLoc.addLocation)
router.post('/locations/images/new/:id',upload.any(), ctrlLoc.newImages)
router.get('/locations/get/:id?', ctrlLoc.getLocations)
router.post('/locations/update/:id',ctrlLoc.updateLoc)
router.post('/locations/delete/:id',ctrlLoc.deleteLocation)

// Package Routes
router.post('/packages/add',ctrlPackage.addPackage)
router.get('/packages/get',ctrlPackage.getPackages)
router.post('/packages/update/:id',ctrlPackage.updatePackage)
router.post('/packages/delete/:id',ctrlPackage.deletePackage)

// Hotel Routes
router.post('/hotels/add', ctrlHotel.addHotel)
router.post('/hotels/images/new/:id',upload.any(), ctrlHotel.newImages)
router.get('/hotels/get/:id?', ctrlHotel.getHotel)
router.post('/hotels/update/:id',ctrlHotel.updateHotel)
router.post('/hotels/delete/:id',ctrlHotel.deleteHotel)

// Tour Routes
router.post('/tours/add', ctrlTour.addTour)
router.get('/tours/get/:id?', ctrlTour.getTours)
router.post('/tours/update/:id',ctrlTour.updateTour)
router.post('/tours/delete/:id',ctrlTour.deleteTour)

//Guide Routes
router.post('/guides/add', ctrlGuide.addGuide)
router.get('/guides/get/:id?', ctrlGuide.getGuides)
router.post('/guides/update/:id',ctrlGuide.updateGuide)
router.post('/guides/delete/:id',ctrlGuide.deleteGuide)

module.exports = router;



