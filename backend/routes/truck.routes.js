import express from "express";

import { getTrucks, postTruck, updateTruck, deleteTruck, getTruck } from '../controllers/truckController.js';

const router = express.Router();

router.get('/', (req, res) => {
    getTrucks(req, res);
})

router.get('/:id', (req, res) => {
    getTruck(req, res);
})

router.post('/', (req, res) => {
    postTruck(req, res);
})

router.patch('/:id', (req, res) => {
    updateTruck(req, res)
});

router.delete('/:id', (req, res) => {
    deleteTruck(req, res);
})

export default router;
