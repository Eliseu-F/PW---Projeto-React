import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
    static json(email: any) {
        throw new Error("Method not implemented.");
    }
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body

        const createUserService = new CreateUserService();

        //try {
        const user = await createUserService.execute({
            name,
            email,
            password
        });

        //envia uma resposta de sucesso
        return res.json(user);

        // } catch (error) {
        //trata os erros e envia uma resposta de erro
        //   res.status(500).json({ error: 'Ocorreu um erro ao inserir o usuário.' })
        //}
    }
}
export { CreateUserController } 