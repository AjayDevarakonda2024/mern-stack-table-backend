const laptops = require("../models/laptops")

exports.getAllLaptops = async (req, res)=>{
    try{
        const laps = await laptops.find({});
        res.json(laps)
    }
    catch(err){
        res.status(500).json(err)
    }
}

exports.saveNewLaptop = async (req, res)=>{
    try{
        const newLaptop = new laptops(req.body);
        await laptops.insertOne(newLaptop)
        res.status(200).json({"message" : "laptop saved successfully"})
    }
    catch(err){
        res.status(500).json(err)
    }
}

exports.deleteLaptop = async (req, res) => {
    try{
        let deleted = await laptops.findOneAndDelete({"sno": req.params.sno});
        if(!deleted){
            res.status(400).json({"message" : "laptop not deleted !!"})
        }
        else{
            res.status(200).json({"message" : "laptop deleted successfully !!"})
        }
    }
    catch(err){
        res.status(500).json(err)
    }
}

exports.updateLaptop = async (req, res) => {
    try{
        let updated = await laptops.findOneAndUpdate({"sno": req.params.sno}, req.body);
        if(!updated){
            res.status(400).json({"message" : "laptop not updated !!"})
        }
        else{
            res.status(200).json({"message" : "laptop updated successfully !!"})
        }
    }
    catch(err){
        res.status(500).json(err)
    }
}