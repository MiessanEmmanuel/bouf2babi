import express  from "express";
import { create, destroy, edit, index, show, store, update } from "../controllers/UserController.js";
import { logger } from "../middlewares/logger.js";

const router = express.Router()
router.use(logger)

router.get('/', index)
router.get('/create', create)
router.post('/', store)
router.get('/edit/:id', edit)
router.get('/:id', show)
router.get('/:id', edit)
router.put('/:id', update)
router.put('/:id', destroy)


export  {router}