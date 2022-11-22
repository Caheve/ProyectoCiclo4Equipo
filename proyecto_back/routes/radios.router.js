const express = require("express");
const router = express.Router();
const radiosController = require("../controllers/radios.controller");

router.post ("/", radiosController.create);
router.get("/", radiosController.find)
router.get("/:id",radiosController.findOne)
router.put("/:id",radiosController.update)
router.delete("/:id",radiosController.remove)

module.exports = router;