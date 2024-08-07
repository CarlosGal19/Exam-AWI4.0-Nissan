import { Schema, model } from 'mongoose'

export const CarTruckSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    model: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    transmition: {
        type: String,
        required: true
    }
});

export default model('Car', CarTruckSchema)
