import express from "express";

import { getCars, postCar, updateCar, deleteCar } from '../controllers/carController.js';

const router = express.Router();

router.get('/', (req, res) => {
    getCars(req, res);
})

router.post('/', (req, res) => {
    postCar(req, res);
})

router.patch('/:id', (req, res) => {
    updateCar(req, res)
});

router.delete('/:id', (req, res) => {
    deleteCar(req, res);
})

export default router;
