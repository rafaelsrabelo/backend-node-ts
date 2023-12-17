import { Router, Request, Response} from 'express';

const router = Router();

router.get('/api', (req: Request, res: Response) => {
    return res.json({ message: "Bem vindo a estrutura inicial da API!"})
})

export { router };