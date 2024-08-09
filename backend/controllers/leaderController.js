import Leader from '../models/leader.model.js'

const getLeaders = async (req, res) => {
    try {
        const leaders = await Leader.find();
        return res.status(200).send({leaders})
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

const postLeader = async (req, res) => {
    try {
        const { name, salary, area } = req.body;
        if([name, area, salary].includes(undefined)){
            return res.status(400).send({message: 'All field are required'});
        }
        const newLeader = Leader.create({
            name,
            area,
            salary
        });
        return res.status(200).send({message: 'Leader created', newLeader});
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

const updateLeader = async (req, res) => {
    try {
        const id = req.body.id
        if(!id) return res.status(400).send({message: 'Id is required'});
        const leader = await Leader.findById(id);
        if(!leader) return res.status(400).send({message: 'Leader not found'});
        const { name, area, salary } = req.body
        if([name, area, salary].includes(undefined)){
            return res.status(400).send({message: 'All field are required'});
        }
        leader.name = name;
        leader.area = area;
        leader.salary = salary;
        await leader.save();
        return res.status(200).send({message: 'Leader updated'});
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

const deleteLeader = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id) return res.status(400).send({message: 'Id is required'});
        const leader = await Leader.findById(id);
        if(!leader) return res.status(400).send({message: 'Leader not found'});
        await leader.deleteOne();
        return res.status(200).send({message: 'Leader deleted succesfully'});
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

export {
    getLeaders,
    postLeader,
    updateLeader,
    deleteLeader
}
