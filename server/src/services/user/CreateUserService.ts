import prismaClient from "../../prisma";
import { Request, Response } from 'express';

interface UserRequest {
    name: string;
    email: string;
    password: string;
}
class CreateUserService {
    async execute({ name, email, password }: UserRequest) {

        //verifica email ja cadastrado
        const userJaExiste = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (!email) {
            throw new Error("Email é obrigatório")
        }

        //verifica se email está duplicado no banco de dados
        if (userJaExiste) {
            throw new Error("usuario ja existe")
        }
        const user = await prismaClient.user.create(
            {
                data: {
                    name: name,
                    email: email,
                    password: password
                },
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            }
        )
        return user
    }
}

class LoginUserController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        try {
            // Verifica se o usuário existe com o email e senha fornecidos
            const user = await prismaClient.user.findFirst({
                where: {
                    email: email,
                    password: password,
                },
            });

            if (!user) {
                throw new Error("Usuário não encontrado ou senha incorreta");
            }

            // Envia uma resposta de sucesso
            return res.json(user);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Ocorreu um erro ao realizar o login' });
        }
    }
}

export { LoginUserController };
export { CreateUserService };