const express = require('express')
const app = express()

const openJobSearch = require('./expected_output.json')


// Endpoint pour avoir accès à tout les open job de Netflix
app.get('/getOpenJobsInfos/Netflix', (req,res) => {
    res.status(200).json(openJobSearch.openJobs)
})

// Endpoint pour avoir accès à un openJob spécifique de Netflix
app.get('/getOpenJobsInfos/Netflix/:id', (req,res) => {
    const id = req.params.id
    const openJobSpecific = (openJobSearch.openJobs).find(openJobSpecific => openJobSpecific.lever_id === id)
    res.status(200).json(openJobSpecific)
})

app.listen(8080, () => {
    console.log('Serveur up')
})