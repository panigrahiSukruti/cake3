
import express from 'express';
import { getCakes, postCakes, editCakes, deleteCakes} from '../controllers/cake.controllers.js';


const cakeRoutes = express.Router();

cakeRoutes.get("/cakes", getCakes);
cakeRoutes.post("/cakes/add", postCakes);
cakeRoutes.put("/cakes/update/:id", editCakes)
cakeRoutes.delete('/cakes/delete/:id', deleteCakes)
export default cakeRoutes; 