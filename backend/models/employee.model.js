import { Schema, model } from 'mongoose'

export const EmployeeScholarSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
});

export default model('Employee', EmployeeScholarSchema)
