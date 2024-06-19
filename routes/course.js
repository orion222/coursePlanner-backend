const express = require('express')
const router =  express.Router()
const data = require('../data.json');

router.get("/prereqs", (req, res) => {
    res.json("Got prereq");
})

router.get("/postreqs", (req, res) => {
    res.json("Got postreq");
})

module.exports = router;

