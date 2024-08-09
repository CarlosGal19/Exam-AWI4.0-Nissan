import Scholar from '../models/scholar.model.js'

const getScholars = async (req, res) => {
    try {
        const scholars = await Scholar.find();
        return res.status(200).send({scholars})
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

const getScholar = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).send({ message: 'Id is required' });

        const scholar = await Scholar.findById(id);
        if (!scholar) return res.status(404).send({ message: 'Scholar not found' });

        return res.status(200).send({ scholar });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

const postScholar = async (req, res) => {
    try {
        const { name, last_name, email, salary } = req.body;
        if([name, last_name, email, salary].includes(undefined)){
            return res.status(400).send({message: 'All field are required'});
        }
        const newScholar = Scholar.create({
            name,
            last_name,
            email,
            salary
        });
        return res.status(200).send({message: 'Scholar created', newScholar});
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

const updateScholar = async (req, res) => {
    try {
        const id = req.params.id
        if(!id) return res.status(400).send({message: 'Id is required'});
        const scholar = await Scholar.findById(id);
        if(!scholar) return res.status(400).send({message: 'scholar not found'});
        const { name, last_name, email, salary } = req.body
        if([name, last_name, email, salary].includes(undefined)){
            return res.status(400).send({message: 'All field are required'});
        }
        scholar.name = name;
        scholar.last_name = last_name;
        scholar.email = email;
        scholar.salary = salary
        await scholar.save();
        return res.status(200).send({message: 'Scholar updated'});
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

const deleteScholar = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id) return res.status(400).send({message: 'Id is required'});
        const scholar = await Scholar.findById(id);
        if(!scholar) return res.status(400).send({message: 'Scholar nos found'});
        await scholar.deleteOne();
        return res.status(200).send({message: 'Scholar deleted succesfully'});
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

export {
    getScholars,
    postScholar,
    updateScholar,
    deleteScholar,
    getScholar
}
