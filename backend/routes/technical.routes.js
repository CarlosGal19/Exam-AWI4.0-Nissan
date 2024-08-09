import express from "express";

import { getTechnicals, postTechnical, updateTechnical, deleteTechnical, getTechnical } from '../controllers/technicalController.js';

const router = express.Router();

router.get('/', (req, res) => {
    getTechnicals(req, res);
})

router.get('/:id', (req, res) => {
    getTechnical(req, res);
})

router.post('/', (req, res) => {
    postTechnical(req, res);
})

router.patch('/:id', (req, res) => {
    updateTechnical(req, res)
});

router.delete('/:id', (req, res) => {
    deleteTechnical(req, res);
})

export default router;
