const mongoose = require('mongoose');
const _ = require('lodash');
const fs = require('fs');

const Package = mongoose.model('Package');

module.exports.addPackage = (req,res,next) =>{
    const newPackage = new Package(req.body)
    newPackage.save((err,doc)=>{
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

module.exports.getPackages= (req,res,next)=>{
    if(req.params.id===undefined || req.params.id==="all"){
        Package.find({}).then(
            (doc)=>{
                res.json(doc)
            }
        )
    }
    else{
        Package.findOne({_id:req.params.id}).then(
            (doc)=>{
                res.json(doc)
            }
        )
    }
}

module.exports.updatePackage = (req,res,next)=>{
    console.log(req.body)
    Package.findOne({_id:req.params.id},
        (err,doc)=>{
            if(!err){
                if(req.body.Name!=undefined){
                    doc.Name = req.body.Name
                }
                if(req.body.Locations!=undefined){
                    doc.Locations = req.body.Locations
                }

                if(req.body.Days!=undefined){
                    doc.Days = req.body.Days
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