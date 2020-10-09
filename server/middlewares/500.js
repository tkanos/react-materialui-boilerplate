import prometheus from 'prom-client'

const err5xx = new prometheus.Counter({ name: 'render5xx', help: 'Rendering a 500' })

/* eslint-disable no-unused-vars */
const Five00 = (err, req, res, next) => {
  /* eslint-enable no-unused-vars */
  err5xx.inc()

  if (req.app.get('env') === 'development' || req.app.get('env') === 'test') {
    res.status(err.status || 500)
    return res.send(
      (err.stack || err.toString())
    )
  }

  res.status(500).set('Content-Type', 'text/html')
  return res
}

export default Five00
