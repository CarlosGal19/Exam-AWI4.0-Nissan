import Truck from '../models/truck.model.js';

export default function test() {
    console.log('Truck controller is running');
}

Truck.create({
    name: 'Cabstar',
    model: 2022,
    color: 'Green',
    transmition: 'Automatic'
})
