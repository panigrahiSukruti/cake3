import mongoose from 'mongoose';

const cakeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    imageUrl: {type: String, reuiqred: true, default: ""}
}, {
    timestamps: true
})

const CakeModel = new mongoose.model('Cake', cakeSchema);

export default CakeModel;
