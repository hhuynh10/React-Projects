const mongoose = require('mongoose');

const MernSchema = new mongoose.Schema({
    title: {
        type: String,
        lowercase: true,
        required: [true, "Name is required!"],
        minLength: [3, "Name must be at least 3 character long"],
        // validate : {
        //     validator: v => unique(v),
        //     message: props => `${props.value} already exist`
        // }
    },
    price: {
        type: Number,
        required: [true, "Price is required!"],
        max: [100, "Price must be less than 100 dollars"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        maxLength: [300, "Description must be less than 300 characters"]
    },
    image: Array
}, {timestamps:true});

MernSchema.path('title').validate(async(title) => {
    const titleCount = await mongoose.models.Mern.countDocuments({title})
    return !titleCount
}, '{VALUE} already exists')

const Mern = mongoose.model('Mern', MernSchema);

module.exports = Mern;