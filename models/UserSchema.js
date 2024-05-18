const mongoose=require('mongoose')

// Create a Schema for Realgrande Database> users collection
const UserSchema = new mongoose.Schema({   
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    },
    role:{
        type: String,
        enum:['customer','realtor'],
        default: 'customer'
    }
})

// Create a UserModel
const UserModel = mongoose.model('User',UserSchema);

module.exports = UserModel;