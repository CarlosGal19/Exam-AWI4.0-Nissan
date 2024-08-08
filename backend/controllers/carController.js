import Car from '../models/car.model.js'

const getCars = async (req, res) => {
    try {
        const cars = await Car.find();
        return res.status(200).send({cars})
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

const postCar = async (req, res) => {
    try {
        const { name, model, color, transmition } = req.body;
        if([name, model, color, transmiton].includes(undefined)){
            return res.status(400).send({message: 'All field are required'});
        }
        const newCar = Car.create({
            name,
            model,
            color,
            transmition
        });
        return res.status(200).send({message: 'Car created', newCar});
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

const updateCar = async (req, res) => {
    try {
        const id = req.body.id
        if(!id) return res.status(400).send({message: 'Id is required'});
        const car = await Car.findById(id);
        if(!car) return res.status(400).send({message: 'Car not found'});
        const { name, model, color, transmition } = req.body
        if([name, model, color, transmition].includes(undefined)){
            return res.status(400).send({message: 'All field are required'});
        }
        car.name = name;
        car.model = model;
        car.color = color;
        car.transmition = transmition
        await car.save();
        return res.status(200).send({message: 'Car updated'});
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

const deleteCar = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id) return res.status(400).send({message: 'Id is required'});
        const car = await Car.findById(id);
        if(!car) return res.status(400).send({message: 'Car nos found'});
        await car.delete();
        return res.status(200).send({message: 'Car deleted succesfully'});
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

export {
    getCars,
    postCar,
    updateCar,
    deleteCar
}
