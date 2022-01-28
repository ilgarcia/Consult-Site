import {Router} from "express"

import auth from "./middlewares/auth"

import HelloController from "./controllers/HelloController";
import SessionController from "./controllers/SessionController";
import usersController from "./controllers/usersController";


const routes = new Router();

// public controller

routes.post('/session',SessionController.create)
routes.get('/hello', HelloController.index)

// Midlewares

routes.use(auth)

// private controller


routes.get('/users', usersController.index)
routes.get('/users/:id', usersController.show)
routes.post('/users', usersController.create)
routes.put('/users/:id', usersController.update)
routes.delete('/users/:id', usersController.destroy)

export default routes;