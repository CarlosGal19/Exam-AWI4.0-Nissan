import express from "express";

import { getEmployees, postEmployee, updateEmployee, deleteEmployee, getEmployee } from "../controllers/employeeController.js";

const router = express.Router();

router.get('/', (req, res) => {
    getEmployees(req, res);
})

router.get('/:id', (req, res) => {
    getEmployee(req, res);
})


router.post('/', (req, res) => {
    postEmployee(req, res);
})

router.patch('/:id', (req, res) => {
    updateEmployee(req, res)
});

router.delete('/:id', (req, res) => {
    deleteEmployee(req, res);
})

export default router;
