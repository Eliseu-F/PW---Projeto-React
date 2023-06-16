import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { CreateUserService, LoginUserController } from './services/user/CreateUserService';


const router = Router();

const createUserController = new CreateUserController();

router.get('/teste', (req: Request, res: Response) => {

 return res.json({ ok: true })

})

router.post('/userinsert',new CreateUserController().handle)
router.post('/gerenciar')
router.post('/login',new LoginUserController().handle)

export { router }