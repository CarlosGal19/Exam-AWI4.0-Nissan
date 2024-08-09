import express from "express";

import { getPayrolls, postPayroll, updatePayroll, deletePayroll, getPayroll } from "../controllers/payrollController.js";

const router = express.Router();

router.get('/', (req, res) => {
    getPayrolls(req, res);
})

router.get('/:id', (req, res) => {
    getPayroll(req, res);
})

router.post('/', (req, res) => {
    postPayroll(req, res);
})

router.patch('/:id', (req, res) => {
    updatePayroll(req, res)
});

router.delete('/:id', (req, res) => {
    deletePayroll(req, res);
})

export default router;
