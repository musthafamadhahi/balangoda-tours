const mongoose = require('mongoose');
const _ = require('lodash');
const fs = require('fs');

const Hotel = mongoose.model('Hotel');

module.exports.addHotel = (req, res, next) => {
    const newHotel = new Hotel(req.body)
    
    newHotel.save((err,doc)=>{
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


module.exports.newImages = (req,res,next)=>{
    var filelist=[];
    var dir = fs.readdir('./uploads/hotels/'+req.params.id, (err,files)=>{  
        Hotel.findOne({_id:req.params.id},(err,doc,)=>{
            if(!err){
        
                files.forEach((f,i)=>{
                    if(doc.Files.indexOf('/uploads/hotels/'+req.params.id+'/'+f)===-1){
                            doc.Files.push('/uploads/hotels/'+req.params.id+'/'+f)
                        }
                    })
                doc.save()
                
            }
        })
    })
}

module.exports.getHotel = (req,res,next)=>{
    if(req.params.id===undefined || req.params.id==="all"){
        Hotel.find({}).then(
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

module.exports.updateHotel = (req,res,next)=>{
    console.log(req.body)
    Hotel.findOne({_id:req.params.id},
        (err,doc)=>{
            if(!err){
                if(req.body.Name!=undefined){
                    doc.Name = req.body.Name
                }
                if(req.body.Address!=undefined){
                    doc.Address = req.body.Address
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

module.exports.deleteHotel = (req,res,next)=>{
    Hotel.deleteOne({_id:req.params.id},(err,ack)=>{
        if(!err){
            
            res.status(200).send(ack.deletedCount+" Entries Deleted")
        }
        else{
            res.send(err)
        }
    })
}