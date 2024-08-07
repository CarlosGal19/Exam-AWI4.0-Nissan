import { model } from 'mongoose'

import { EmployeeScholarSchema } from './employee.model.js';

export default model('Scholar', EmployeeScholarSchema)
