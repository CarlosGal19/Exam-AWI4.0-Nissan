import Employee from '../models/employee.model.js'

const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        return res.status(200).send({employees})
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

const getEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).send({ message: 'Id is required' });

        const employee = await Employee.findById(id);
        if (!employee) return res.status(404).send({ message: 'Employee not found' });

        return res.status(200).send({ employee });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

const postEmployee = async (req, res) => {
    try {
        const { name, last_name, email, salary } = req.body;
        if([name, last_name, email, salary].includes(undefined)){
            return res.status(400).send({message: 'All field are required'});
        }
        const newEmployee = Employee.create({
            name,
            last_name,
            email,
            salary
        });
        return res.status(200).send({message: 'Employee created', newEmployee});
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

const updateEmployee = async (req, res) => {
    try {
        const id = req.params.id
        if(!id) return res.status(400).send({message: 'Id is required'});
        const employee = await employee.findById(id);
        if(!employee) return res.status(400).send({message: 'Employee not found'});
        const { name, last_name, email, salary } = req.body
        if([name, last_name, email, salary].includes(undefined)){
            return res.status(400).send({message: 'All field are required'});
        }
        employee.name = name;
        employee.last_name = last_name;
        employee.email = email;
        employee.salary = salary
        await employee.save();
        return res.status(200).send({message: 'Employee updated'});
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

const deleteEmployee = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id) return res.status(400).send({message: 'Id is required'});
        const employee = await Employee.findById(id);
        if(!employee) return res.status(400).send({message: 'Employee nos found'});
        await employee.deleteOne();
        return res.status(200).send({message: 'Employee deleted succesfully'});
    } catch (error) {
        return res.status(500).send({message: error.mesage})
    }
}

export {
    getEmployees,
    postEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
}
