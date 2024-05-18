const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3000

app.use(cors())
app.get('/colors', async (req, res) =>{
    try{
        const apiRes = await fetch('https://www.colourlovers.com/api/colors?format=json')
        
        if (!apiRes.ok) {
            throw new Error(`HTTP error status: ${apiRes.status}`)
        }
        const data = await apiRes.json()

        res.json(data)

    } catch (erorr) {
        console.error('fetch error')
        res.status(500).send('internal server error')
    }
})

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})