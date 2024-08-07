import Technical from '../models/technical.model.js'

export default function test(){
    console.log('Technical controller is running');
}

Technical.create({
    name: 'Marco',
    last_name: 'Arellano',
    area: 'Quality',
    holidays: 10,
    salary: 12000
});
