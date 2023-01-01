const url = require('url')
const path = require('path')
const express = require('express')
const cors = require('cors')
const needle = require('needle')
const rateLimit = require('express-rate-limit')
const apiCache = require('apicache')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()

const API_BASE_URL = process.env.REACT_APP_NASA_API_BASE_URL
const API_KEY_NAME = process.env.REACT_APP_NASA_API_KEY_NAME
const API_KEY_VALUE = process.env.REACT_APP_NASA_API_KEY_VALUE

let options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
    index: ['index.html'],
    maxAge: '1m',
    redirect: true
  }
  app.use(express.static('build', options))

app.use(cors())

/* Cache only if there is no 'count' url parameter, thus on the /gallery page on
every refresh it will fetch a batch of new random pictures */
let cache = apiCache.middleware
const conditionalCache = cache('2 minutes', (req, _res) => !req.query.count)

const limiter = rateLimit({
    windowMS: 60 * 60 * 1000, // 1 hour
    max: 1000
})
app.use(limiter)
app.set('trust proxy', 1)

app.use(express.static('public'))

// Route to fetch the data for the main page and gallery
app.get('/api', conditionalCache, async (req, res) => {
    try {
        const apiParameters = new URLSearchParams({
            [API_KEY_NAME]: API_KEY_VALUE,
            ...url.parse(req.url, true).query,
        })

        const apiResponse = await needle('get', `${API_BASE_URL}?${apiParameters}`)
        res.status(apiResponse.statusCode).json(apiResponse.body)
    } catch (error) {
        res.status(500).json({ error })
    }
})

// Route all requests to subpages to the main html -> React can handle it from that point
app.get('/*', function (_req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
