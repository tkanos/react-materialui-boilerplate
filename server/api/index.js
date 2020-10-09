import express from 'express'
import * as dummy from '../repository/dummy.js'

const router = express.Router()

router.get('/dummy/json', (req, res, next) => {
    dummy
      .getDummy()
      .then(response => res.status(200).send(response))
      .catch(next)
})

export default router
