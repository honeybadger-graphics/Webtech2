const express = require('express');
const legosRouter = express.Router();

const legosController = require("../controller/legoController");

legosRouter.post('/add-legos', legosController.addLegos);
legosRouter.get('/read-legos', legosController.getAllLegos);
legosRouter.get('/read-legos/:id', legosController.getLegoById);
legosRouter.put('/update-legos/:id', legosController.updateLego);
legosRouter.delete('/delete-legos/:id', legosController.deleteLegoById);
 
module.exports = legosRouter;