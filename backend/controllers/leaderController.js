import Leader from '../models/leader.model.js';

export default function test(){
    console.log('Leader controller is running');
}

Leader.create({
    name: 'Sharon',
    salary: 4590,
    area: 'Kitchen'
})
