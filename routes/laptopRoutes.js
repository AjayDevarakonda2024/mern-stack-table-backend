const express = require("express")
const controller = require("../controllers/laptopControllers")
const router = express.Router()
router.get("/", controller.getAllLaptops)
router.post("/", controller.saveNewLaptop)
router.delete("/:sno", controller.deleteLaptop)
router.put("/:sno", controller.updateLaptop)
module.exports = router;