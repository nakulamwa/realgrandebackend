const mongoose=require('mongoose')

// Create a Schema for Realgrande Database> enquiries collection
const EnquirySchema = new mongoose.Schema({   
    ename:String,
    email:String,
    remarks: String
})

// Create a EnquiryModel
const EnquiryModel = mongoose.model('Enquiry',EnquirySchema);

module.exports = EnquiryModel;