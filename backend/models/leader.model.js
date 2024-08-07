import { Schema, model } from 'mongoose'

const LeaderModel = new Schema({
    name:{
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    area: {
        type: String,
        required: true
    }
});

export default model('Leader', LeaderModel)
