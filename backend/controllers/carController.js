import Car from '../models/car.model.js';

export default function test() {
    console.log('Car controller is running');
}

Car.create({
    name: 'Versa',
    model: 2020,
    color: 'Red',
    transmition: 'Manual'
})
