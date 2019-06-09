const mongoose = require('mongoose');

const Tour = mongoose.model('Tour');

module.exports.addTour = (req, res, next) => {
    const newTour = new Tour(req.body)
   
    newTour.save((err,doc)=>{
         if(!err){
             res.send(doc.id)
         }
         else{
             res.send(err)
             return next(err)
         }
    });
 }

 module.exports.getTours = (req,res,next)=>{
    if(req.params.id===undefined || req.params.id==="all"){
        Tour.find({}).then(
            (doc)=>{
                res.json(doc)
            }
        )
    }
    else{
        Tour.findOne({_id:req.params.id}).then(
            (doc)=>{
                res.json(doc)
            }
        )
    }
}


module.exports.updateTour = (req,res,next)=>{
    console.log(req.body)
    Tour.findOne({_id:req.params.id},
        (err,doc)=>{
            if(!err){
               
                    doc.User = req.body.User
                    doc.Package = req.body.Package
                    doc.Start = req.body.Start
                    doc.Guide=req.body.Guide
                    doc.Hotel=req.body.Hotel
                
                doc.save()
                res.status(200).send("OK")
            }
            else{
                res.send(err.name)
            }
        }
    )
}

module.exports.deleteTour = (req,res,next)=>{
    Tour.deleteOne({_id:req.params.id},(err,ack)=>{
        if(!err){
            
            res.status(200).send(ack.deletedCount+" Entries Deleted")
        }
        else{
            res.send(err)
        }
    })
}