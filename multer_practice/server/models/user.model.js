const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        required: [true, "Name is required!"],
        minLength: [3, "Name must be at least 3 character long"],
        // unique: true
    },
    image: {
        type: String
    }
}, {timestamps:true});

UserSchema.path('name').validate(async(name) => {
    const nameCount = await mongoose.models.User.countDocuments({name})
    return !nameCount
}, '{VALUE} already exists')

const User = mongoose.model('User', UserSchema);

module.exports = User;