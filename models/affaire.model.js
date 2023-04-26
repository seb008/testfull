const mongoose = require ('mongoose');

const AffaireSchema =new mongoose.Schema(
    {
        createId:{
            type : String,
            require : true
        },
        nomAffaire:{
            type :String,
            require :true,
            trim: true,
            maxlength: 100,
        },
        picture:{
            type:String,
        },
        participant:{
            type:[String],
        },
        paragraphe:{
            type:[String],
        },
        prixvendue:{
            type:Number,
            float: true,
        },
    },
    {
        timestamps: true,
    }
);

AffaireModel = mongoose.model('affaire', AffaireSchema);
module.exports = AffaireModel;