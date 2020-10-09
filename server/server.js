import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import api from './api/index.js'
import setCacheHeader from './middlewares/cache-header.js'
import five00 from './middlewares/500.js'

import {Tracer, ExplicitContext, ConsoleRecorder} from 'zipkin';
import zipkinInstrumentation from 'zipkin-instrumentation-express'
const zipkinMiddleware = zipkinInstrumentation.expressMiddleware;
const ctxImpl = new ExplicitContext();
const recorder = new ConsoleRecorder();
const localServiceName = 'api-server'; // name of this application
const tracer = new Tracer({ctxImpl, recorder, localServiceName});


const port = process.env.PORT || 4000
const app = express()

// No middleware
import {healthzRouter} from './routes/healthz.js'
import {metricsRouter} from'./routes/metrics.js'
app.use('/', healthzRouter)
app.use('/', metricsRouter)


// Middlewares
app
  .use(cookieParser())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(setCacheHeader)
  .use(zipkinMiddleware({tracer}))
  .use('/api', api)
  // Middlewares: after routes
  .use(five00)
  .listen(port, () => console.log(`App listening on :${port}`)) // eslint-disable-line no-console
