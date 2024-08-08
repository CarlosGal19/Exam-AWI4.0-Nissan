import Coach from '../models/coach.model.js'

const getCoachs = async (req, res) => {
    try {
        const coachs = await Coach.find();
        return res.status(200).send({coachs})
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

const postCoach = async (req, res) => {
    try {
        const { name, last_name, area, holidays, salary } = req.body;
        if([name, last_name, area, holidays, salary].includes(undefined)){
            return res.status(400).send({message: 'All field are required'});
        }
        const newCoach = Coach.create({
            name,
            last_name,
            area,
            holidays,
            salary
        });
        return res.status(200).send({message: 'Coach created', newCoach});
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

const updateCoach = async (req, res) => {
    try {
        const id = req.body.id
        if(!id) return res.status(400).send({message: 'Id is required'});
        const coach = await Coach.findById(id);
        if(!coach) return res.status(400).send({message: 'Coach not found'});
        const { name, last_name, area, holidays, salary } = req.body
        if([name, last_name, area, holidays, salary].includes(undefined)){
            return res.status(400).send({message: 'All field are required'});
        }
        coach.name = name;
        coach.last_name = last_name;
        coach.area = area;
        coach.holidays = holidays;
        coach.salary = salary;
        await coach.save();
        return res.status(200).send({message: 'Coach updated'});
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

const deleteCoach = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id) return res.status(400).send({message: 'Id is required'});
        const coach = await Coach.findById(id);
        if(!coach) return res.status(400).send({message: 'Coach not found'});
        await coach.delete();
        return res.status(200).send({message: 'Coach deleted succesfully'});
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

export {
    getCoachs,
    postCoach,
    updateCoach,
    deleteCoach
}
