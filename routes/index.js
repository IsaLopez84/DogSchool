var express = require("express");
const indexController = require("../controllers/indexController");
// const uploadImage = require("../middleware/multer");
var router = express.Router();

// ruta base del archivo: localhost:3000

/* GET home page. */
// localhost:3000
router.get("/", indexController.viewHome);

module.exports = router;

// uploadImage("trainers"),
