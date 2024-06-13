const express = require('express')
const router = express.Router()

router.get('/comida',(req,res)=>{
    return res.json({mensaje:"si cargo, sin comida"})
})

module.exports= router
