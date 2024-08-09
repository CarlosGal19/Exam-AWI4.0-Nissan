const forms = [
    {
        id: 1,
        title: 'Car',
    },
    {
        id: 2,
        title: 'Truck',
    },
    {
        id: 3,
        title: 'Employee'
    },
    {
        id: 4,
        title: 'Coach'
    },
    {
        id: 5,
        title: 'Leader'
    },
    {
        id: 6,
        title: 'Payroll'
    },
    {
        id: 7,
        title: 'Technical'
    },
    {
        id: 8,
        title: 'Scholar'
    }
]

const values = [
    {
        name: 'car',
        value: ['name', 'model', 'color', 'transmition']
    },
    {
        name: 'truck',
        value: ['name', 'model', 'color', 'transmition']
    },
    {
        name: 'employee',
        value: ['name', 'last_name', 'email', 'salary']
    },
    {
        name: 'scholar',
        value: ['name', 'last_name', 'email', 'salary']
    },
    {
        name: 'coach',
        value: ['name', 'last_name', 'area', 'holidays', 'salary']
    },
    {
        name: 'technical',
        value: ['name', 'last_name', 'area', 'holidays', 'salary']
    },
    {
        name: 'payroll',
        value: ['employee', 'bonus', 'salary']
    },    {
        name: 'leader',
        value: ['name', 'salary', 'area']
    }
]

export default forms;

export { values };
