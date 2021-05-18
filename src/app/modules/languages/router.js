import { Router } from 'express'
import { listTrendingLanguages } from './controller.js'

const router = Router()
router.get("/", listTrendingLanguages)

export default router