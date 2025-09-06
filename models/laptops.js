const mongoose = require("mongoose")

const laptopSchema = new mongoose.Schema(
    {
        "sno" : {type : Number, required : true},
        "name" : {type : String},
        "cost" : {type : Number},
        "discount" : {type : Number},
        "image" : {type : String}
    }
)

module.exports = mongoose.model("laptops", laptopSchema)