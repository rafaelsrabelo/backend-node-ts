import { Router, Request, Response} from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';

const router = Router();

// --ROUTES USERS --
router.post('/users', new CreateUserController().handle);

export { router };