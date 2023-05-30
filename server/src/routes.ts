import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
const router = Router();
//note que podemos tipar (typescript): req e do tipo "Request" e res é do tipo "Response"

router.get('/teste', (req: Request, res: Response) => {

 return res.json({ ok: true })

})

//Nova rota
//Rotas USER ------------
router.post('/users',new CreateUserController().handle)
export { router }