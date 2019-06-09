const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
const fs = require('fs');

const Location = mongoose.model('Location');

module.exports.addLocation = (req, res, next) => {
   const newLocation = new Location(req.body)
   console.log(req.body.Name)
   newLocation.save((err,doc)=>{
        if(!err){
            console.log(doc)
            res.send(doc.id)
        }
        else{
            res.send(err)
            return next(err)
        }
   });
}

module.exports.updateLoc = (req,res,next)=>{
    console.log(req.body)
    Location.findOne({_id:req.params.id},
        (err,doc)=>{
            if(!err){
                if(req.body.Name!=undefined){
                    doc.Name = req.body.Name
                }
                if(req.body.Coords!=undefined){
                    doc.Coords = req.body.Coords
                }
                doc.save()
                res.status(200).send("OK")
            }
            else{
                res.send(err.name)
            }
        }
    )
}

module.exports.getLocations = (req,res,next)=>{
    if(req.params.id===undefined || req.params.id==="all"){
        Location.find({}).then(
            (doc)=>{
                res.json(doc)
            }
        )
    }
    else{
        Location.findOne({_id:req.params.id}).then(
            (doc)=>{
                res.json(doc)
            }
        )
    }
}


module.exports.newImages = (req,res,next)=>{
    var filelist=[];
    var dir = fs.readdir('./uploads/locations/'+req.params.id, (err,files)=>{  
        Location.findOne({_id:req.params.id},(err,doc,)=>{
            if(!err){
        
                files.forEach((f,i)=>{
                    if(doc.Files.indexOf('/uploads/locations/'+req.params.id+'/'+f)===-1){
                            doc.Files.push('/uploads/locations/'+req.params.id+'/'+f)
                        }
                    })
                doc.save()
                
            }
        })
    })
}



