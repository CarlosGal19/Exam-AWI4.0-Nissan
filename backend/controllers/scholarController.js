import Scholar from '../models/scholar.model.js'

export default function test(){
    console.log('Scholar controller is running');
}

Scholar.create({
    name: 'Alvaro',
    last_name: 'Esparza',
    email: 'alvaro@utma.edu.mx',
    salary: 7500
});
