import express from 'express';

const controller = require("../controller/productos.js")

const router = express.Router();

const path = 'producto'

router.get(
    `/${path}`,
    controller.getData
)

module.exports = router