import { Router } from "express";
import { getUsuarios, createUsuarios, updateUsuarios, deleteUsuarios, getTransferencias, createTransferencias } from "../controller/controller.js";
const routes = Router();

routes.get("/usuarios", getUsuarios);
routes.post("/usuarios", createUsuarios);
routes.put("/usuarios/:id", updateUsuarios);
routes.delete("/usuarios/:id", deleteUsuarios);

routes.get('/transferencias', getTransferencias);
routes.post('/transferencias', createTransferencias);

routes.use('*', (req, res) => {
    res.status(404).send('Not Found');
});

export default routes;