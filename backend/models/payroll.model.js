import { Schema, model } from 'mongoose'

const PayrollSchema = new Schema({
    employee:{
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    bonus: {
        type: Boolean,
        required: true
    }
});

export default model('Payroll', PayrollSchema)
