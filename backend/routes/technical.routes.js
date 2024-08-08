import express from "express";

import { getTechnicals, postTechnical, updateTechnical, deleteTechnical } from '../controllers/technicalController.js';

const router = express.Router();

router.get('/', (req, res) => {
    getTechnicals(req, res);
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
