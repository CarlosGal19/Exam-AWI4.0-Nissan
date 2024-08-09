import Payroll from '../models/payroll.model.js'

const getPayrolls = async (req, res) => {
    try {
        const payrolls = await Payroll.find();
        return res.status(200).send({payrolls})
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

const getPayroll = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).send({ message: 'Id is required' });

        const payroll = await Payroll.findById(id);
        if (!payroll) return res.status(404).send({ message: 'Payroll not found' });

        return res.status(200).send({ payroll });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

const postPayroll = async (req, res) => {
    try {
        const { name, salary, bonus } = req.body;
        if([name, bonus, salary].includes(undefined)){
            return res.status(400).send({message: 'All field are required'});
        }
        const newPayroll = Payroll.create({
            name,
            bonus,
            salary
        });
        return res.status(200).send({message: 'Payroll created', newPayroll});
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

const updatePayroll = async (req, res) => {
    try {
        const id = req.body.id
        if(!id) return res.status(400).send({message: 'Id is required'});
        const payroll = await Payroll.findById(id);
        if(!payroll) return res.status(400).send({message: 'Payroll not found'});
        const { name, bonus, salary } = req.body
        if([name, bonus, salary].includes(undefined)){
            return res.status(400).send({message: 'All field are required'});
        }
        payroll.name = name;
        payroll.salary = salary;
        payroll.bonus = bonus;
        await payroll.save();
        return res.status(200).send({message: 'Payroll updated'});
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

const deletePayroll = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id) return res.status(400).send({message: 'Id is required'});
        const payroll = await Payroll.findById(id);
        if(!payroll) return res.status(400).send({message: 'Payroll not found'});
        await payroll.deleteOne();
        return res.status(200).send({message: 'Payroll deleted succesfully'});
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

export {
    getPayrolls,
    postPayroll,
    updatePayroll,
    deletePayroll,
    getPayroll
}
