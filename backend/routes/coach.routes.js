import express from "express";

import { getCoachs, postCoach, updateCoach, deleteCoach } from '../controllers/coachController.js';

const router = express.Router();

router.get('/', (req, res) => {
    getCoachs(req, res);
})

router.post('/', (req, res) => {
    postCoach(req, res);
})

router.patch('/:id', (req, res) => {
    updateCoach(req, res)
});

router.delete('/:id', (req, res) => {
    deleteCoach(req, res);
})

export default router;
