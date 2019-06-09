const mongoose = require('mongoose');
const Guide = mongoose.model('Guide');


module.exports.addGuide = (req, res, next) => {
    const newGuide = new Guide(req.body)
    console.log(req.body.Name)
    newGuide.save((err,doc)=>{
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


 module.exports.getGuides= (req,res,next)=>{
    if(req.params.id===undefined || req.params.id==="all"){
        Guide.find({}).then(
            (doc)=>{
                res.json(doc)
            }
        )
    }
    else{
        Guide.findOne({_id:req.params.id}).then(
            (doc)=>{
                res.json(doc)
            }
        )
    }
}

module.exports.updateGuide = (req,res,next)=>{
    console.log(req.body)
    Guide.findOne({_id:req.params.id},
        (err,doc)=>{
            if(!err){
               
                    doc.User = req.body.User
                    doc.Unavailable = req.body.Unavailable
                
                doc.save()
                res.status(200).send("OK")
            }
            else{
                res.send(err.name)
            }
        }
    )
}

module.exports.deleteGuide = (req,res,next)=>{
    Guide.deleteOne({_id:req.params.id},(err,ack)=>{
        if(!err){
            
            res.status(200).send(ack.deletedCount+" Entries Deleted")
        }
        else{
            res.send(err)
        }
    })
}