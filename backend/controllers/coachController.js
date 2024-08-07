import Coach from '../models/coach.model.js'

export default function test(){
    console.log('Coach controller is running');
}

Coach.create({
    name: 'Gabo',
    last_name: 'Saldaña',
    area: 'Software development',
    holidays: 12,
    salary: 10000
});
