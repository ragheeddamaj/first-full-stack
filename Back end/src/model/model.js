var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PropertySchema = new Schema({
//    property: {
//        type: String
//            //        required: true
//    },
    propertyType : {
        type:String
    },
    area: {
        type: Number
            //        required: true
    },
    price: {
        type: Number,
        require: true
    },
    rooms: {
        type: Number
            //        required: true
    },
    bathrooms: {
        type: Number
    },
    additionalDetails: String,
//    poepleComments: [String]

});


module.exports = mongoose.model("Property", PropertySchema);