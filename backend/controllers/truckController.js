import Truck from '../models/truck.model.js'

const getTrucks = async (req, res) => {
    try {
        const trucks = await Truck.find();
        return res.status(200).send({trucks})
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

const getTruck = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).send({ message: 'Id is required' });

        const truck = await Truck.findById(id);
        if (!truck) return res.status(404).send({ message: 'Truck not found' });

        return res.status(200).send({ truck });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

const postTruck = async (req, res) => {
    try {
        const { name, model, color, transmition } = req.body;
        if([name, model, color, transmition].includes(undefined)){
            return res.status(400).send({message: 'All field are required'});
        }
        const newTruck = Truck.create({
            name,
            model,
            color,
            transmition
        });
        return res.status(200).send({message: 'Truck created', newTruck});
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

const updateTruck = async (req, res) => {
    try {
        const id = req.body.id
        if(!id) return res.status(400).send({message: 'Id is required'});
        const truck = await Truck.findById(id);
        if(!truck) return res.status(400).send({message: 'Truck nos found'});
        const { name, model, color, transmition } = req.body
        if([name, model, color, transmition].includes(undefined)){
            return res.status(400).send({message: 'All field are required'});
        }
        truck.name = name;
        truck.model = model;
        truck.color = color;
        truck.transmition = transmition
        await truck.save();
        return res.status(200).send({message: 'Truck updated'});
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

const deleteTruck = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id) return res.status(400).send({message: 'Id is required'});
        const truck = await Truck.findById(id);
        if(!truck) return res.status(400).send({message: 'Truck not found'});
        await truck.deleteOne();
        return res.status(200).send({message: 'Truck deleted succesfully'});
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

export {
    getTrucks,
    postTruck,
    updateTruck,
    deleteTruck,
    getTruck
}
