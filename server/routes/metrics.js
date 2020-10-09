import express from 'express'
import prometheus from 'prom-client'

const router = express.Router()

// enable prometheus default metrics
prometheus.collectDefaultMetrics({ timeout: 5000 })

router.get('/metrics', (req, res) => {
  res.set('Content-Type', prometheus.register.contentType)
  res.end(prometheus.register.metrics())
})

export { router as metricsRouter }
