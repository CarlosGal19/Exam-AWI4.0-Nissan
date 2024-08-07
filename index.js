import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import connectDB from './backend/config/db';

import TestCar from './backend/controllers/carController.js'
import TestCoach from './backend/controllers/coachController.js'
import TestEmployee from './backend/controllers/employeeController.js'
import TestLeader from './backend/controllers/leaderController.js'
import TestPayroll from './backend/controllers/payrollController.js'
import TestScholar from './backend/controllers/scholarController.js'
import TestTechnical from './backend/controllers/technicalController.js'
import TestTruck from './backend/controllers/truckController.js'

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

await connectDB();

app.get('/', (req, res) => {
    return res.status(200).send({Hello: 'World'})
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})

TestCar();
TestCoach();
TestEmployee();
TestLeader();
TestPayroll();
TestScholar();
TestTechnical();
TestTruck();
