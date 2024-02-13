const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.json({"users": ["userOne", "userTwo"]})
})

router
    .route("/:id")
    .get((req, res) => {
        res.send(`Get users with ID of ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Get users with ID of ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Get users with ID of ${req.params.id}`)
    })
    .post((req, res) => {
        res.send(`Get users with ID of ${req.params.id}`)
    })

module.exports = router