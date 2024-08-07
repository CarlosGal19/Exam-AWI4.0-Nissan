import Employee from '../models/employee.model.js'

export default function test(){
    console.log('Employee controller is running');
}

Employee.create({
    name: 'Carlos',
    last_name: 'Galindo',
    email: 'utm22030587@utma.edu.mx',
    salary: 10000
});
