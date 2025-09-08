
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Usuarios } from "../../entities/usuarios.entitie";
import { AppError } from "../../errors";
import { AppDataSource } from "../../data-source";


export const ResetPasswordService = async (token: string, novaSenha: string) => {
  try {
    const decoded: any = jwt.verify(token, process.env.SECRET_KEY!);

    const userRepo = AppDataSource.getRepository(Usuarios);
    const user = await userRepo.findOne({ where: { id: decoded.id } });
    if (!user) throw new AppError("Usuário não encontrado", 404);

    if (novaSenha.length < 8)
      throw new AppError("A senha deve ter pelo menos 8 caracteres", 400);

    const hash = await bcrypt.hash(novaSenha, 10);
    user.password = hash;
    await userRepo.save(user);

  } catch {
    throw new AppError("Token inválido ou expirado", 400);
  }
};
