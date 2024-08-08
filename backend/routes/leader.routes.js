import express from "express";

import { getLeaders, postLeader, updateLeader, deleteLeader } from "../controllers/leaderController.js";

const router = express.Router();

router.get('/', (req, res) => {
    getLeaders(req, res);
})

router.post('/', (req, res) => {
    postLeader(req, res);
})

router.patch('/:id', (req, res) => {
    updateLeader(req, res)
});

router.delete('/:id', (req, res) => {
    deleteLeader(req, res);
})

export default router;
