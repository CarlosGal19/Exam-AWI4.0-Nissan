import Payroll from '../models/payroll.model.js';

export default function test(){
    console.log('Payroll controller is running');
}

Payroll.create({
    employee: 'Brandon',
    salary: 3270,
    bonus: true
})
