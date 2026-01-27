import express from "express";
import bodyParser from "body-parser";
import { createUser } from "../controllers/webhook.controller.js";

const router = express.Router()

router.post('/clerk-user',bodyParser.raw({ type: 'application/json' }), createUser)

export default router