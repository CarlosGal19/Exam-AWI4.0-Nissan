import Technical from '../models/technical.model.js'

const getTechnicals = async (req, res) => {
    try {
        const technicals = await Technical.find();
        return res.status(200).send({technicals})
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

const postTechnical = async (req, res) => {
    try {
        const { name, last_name, area, holidays, salary } = req.body;
        if([name, last_name, area, holidays, salary].includes(undefined)){
            return res.status(400).send({message: 'All field are required'});
        }
        const newTechnical = Technical.create({
            name,
            last_name,
            area,
            holidays,
            salary
        });
        return res.status(200).send({message: 'Teachnical created', newTechnical});
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

const updateTechnical = async (req, res) => {
    try {
        const id = req.body.id
        if(!id) return res.status(400).send({message: 'Id is required'});
        const technical = await Technical.findById(id);
        if(!technical) return res.status(400).send({message: 'Technical not found'});
        const { name, last_name, area, holidays, salary } = req.body
        if([name, last_name, area, holidays, salary].includes(undefined)){
            return res.status(400).send({message: 'All field are required'});
        }
        technical.name = name;
        technical.last_name = last_name;
        technical.area = area;
        technical.holidays = holidays;
        technical.salary = salary;
        await technical.save();
        return res.status(200).send({message: 'Technical updated'});
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

const deleteTechnical = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id) return res.status(400).send({message: 'Id is required'});
        const technical = await Technical.findById(id);
        if(!technical) return res.status(400).send({message: 'Technical not found'});
        await technical.deleteOne();
        return res.status(200).send({message: 'Technical deleted succesfully'});
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

export {
    getTechnicals,
    postTechnical,
    updateTechnical,
    deleteTechnical
}
