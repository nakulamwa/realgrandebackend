const mongoose=require('mongoose')

// Create a Schema for Realgrande Database> houses collection
const HouseSchema = new mongoose.Schema({   
    _id: Number,
    address: String,
    county: String,
    description: String,
    price: Number,
    photo: String
})

// Create a HouseModel
const HouseModel = mongoose.model('House',HouseSchema);

module.exports = HouseModel;