import express from "express";

import { getScholars, postScholar, updateScholar, deleteScholar, getScholar } from '../controllers/scholarController.js';

const router = express.Router();

router.get('/', (req, res) => {
    getScholars(req, res);
})
router.get('/:id', (req, res) => {
    getScholar(req, res);
})

router.post('/', (req, res) => {
    postScholar(req, res);
})

router.patch('/:id', (req, res) => {
    updateScholar(req, res)
});

router.delete('/:id', (req, res) => {
    deleteScholar(req, res);
})

export default router;
