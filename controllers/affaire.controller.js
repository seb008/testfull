const AffaireModel = require ('../models/affaire.model');
const UserModel = require ('../models/user.model');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports.readAffaire=(req,res)=>{
    AffaireModel.find((err,docs)=>{
        if(!err) res.send(docs);
        else console.log('Error get data' + err);
    })
};

module.exports.createAffaire= async (req,res)=>{
    const newAffaire = new AffaireModel({
        creatId: req.body.creatId,
        nomAffaire: req.body.nomAffaire,
        participant: [],
    });

    try {
        const affaire = await newAffaire.save();
        return res.status(201).json(affaire);
    }catch (err) {
        return res.status(400).send(err);
    }
};

module.exports.updateAffaire = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).send("ID unknown: " + req.params.id);
    }
  
    const updatedRecord = {
      nomAffaire: req.body.nomAffaire
    };
  
    try {
      const updatedAffaire = await AffaireModel.findByIdAndUpdate(
        req.params.id,
        { $set: updatedRecord },
        { new: true }
      );
  
      if (!updatedAffaire) {
        return res.status(404).send('Affaire not found.');
      }
  
      return res.send(updatedAffaire);
    } catch (err) {
      console.log("Update err: " + err);
      return res.status(500).send('Internal server error.');
    }
  };

  module.exports.deleteAffaire = (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).send("ID unknown: " + req.params.id);
    }

    AffaireModel.findOneAndDelete({ _id: req.params.id })
      .then((affaire) => {
        if (affaire) {
          res.status(200).json({ message: "Affaire deleted successfully" });
        } else {
          res.status(404).json({ message: "Affaire not found" });
        }
      })
      .catch((err) => {
        console.log("Delete err: " + err);
        res.status(500).json({ message: "Internal server error" });
      });
  };

  