const url = require('url')
const express = require('express')
const cors = require('cors')
const needle = require('needle')
const rateLimit = require('express-rate-limit')
const apiCache = require('apicache')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()

// Enviroment variables
const API_BASE_URL = process.env.REACT_APP_NASA_API_BASE_URL
const API_KEY_NAME = process.env.REACT_APP_NASA_API_KEY_NAME
const API_KEY_VALUE = process.env.REACT_APP_NASA_API_KEY_VALUE

// Build options
let options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
    index: ['index.html'],
    maxAge: '1m',
    redirect: true
  }
  app.use(express.static('build', options))

// Enable cors
app.use(cors())

// Initialize cache
let cache = apiCache.middleware

/* Cache only if there is no 'count' url parameter, thus on the /gallery page on
every refresh it will fetch a batch of new random pictures */
const noCountParameter = (req, res) => !req.query.count
const conditionalCache = cache('2 minutes', noCountParameter)

// Rate limiting, limits the requests for a given time
const limiter = rateLimit({
    windowMS: 60 * 60 * 1000, // 1 hour
    max: 1000
})
app.use(limiter)
app.set('trust proxy', 1)

// Set static folder
app.use(express.static('public'))

// Route to fetch the data for the main page
app.get('/api', conditionalCache, async (req, res) => {
    try {
        const params = new URLSearchParams({
            [API_KEY_NAME]: API_KEY_VALUE,
            ...url.parse(req.url, true).query,
        })

        const apiRes = await needle('get', `${API_BASE_URL}?${params}`)
        const data = apiRes.body

        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ error })
    }
})

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
