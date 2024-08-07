import { Schema, model } from 'mongoose'

export const CoachTecnicalSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    holidays: {
        type: Number,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
});

export default model('Coach', CoachTecnicalSchema)
