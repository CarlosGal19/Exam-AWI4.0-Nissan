import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import connectDB from './backend/config/db.js';

import CarRoutes from './backend/routes/car.routes.js'
import CoachRoutes from './backend/routes/coach.routes.js'
import EmployeeRoutes from './backend/routes/employee.routes.js'
import LeaderRoutes from './backend/routes/leader.routes.js'
import PayrollRoutes from './backend/routes/payroll.routes.js'
import ScholarRoutes from './backend/routes/scholar.routes.js'
import TechnicalRoutes from './backend/routes/technical.routes.js'
import TruckRoutes from './backend/routes/truck.routes.js'

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

await connectDB();

app.get('/', (req, res) => {
    return res.status(200).send({Hello: 'World'})
})

app.use('/api/car', CarRoutes)
app.use('/api/coach', CoachRoutes)
app.use('/api/employee', EmployeeRoutes)
app.use('/api/leader', LeaderRoutes)
app.use('/api/payroll', PayrollRoutes)
app.use('/api/scholar', ScholarRoutes)
app.use('/api/technical', TechnicalRoutes)
app.use('/api/truck', TruckRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})
