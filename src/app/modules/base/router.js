import { Router } from 'express'
import { getBase } from './controller.js'

const router = Router()
router.get("/", getBase)

export default router