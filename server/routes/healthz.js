import express from 'express'

const router = express.Router()

router.get('/healthz', (req, res) => {
  res.status(200).end()
})

export { router as healthzRouter }
