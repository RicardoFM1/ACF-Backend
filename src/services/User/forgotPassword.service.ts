import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { Usuarios } from "../../entities/usuarios.entitie";
import { AppError } from "../../errors";
import nodemailer from "nodemailer";


export const ForgotPasswordService = async (email: string) => {
  const userRepo = AppDataSource.getRepository(Usuarios);
  const user = await userRepo.findOne({ where: { email } });
  if (!user) throw new AppError("Usuário não encontrado", 404);

  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY!, { expiresIn: "1h" });
  const link = `https://acf-frontend-4.onrender.com/${token}`;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

await transporter.sendMail({
  from: `"Meu Site" <${process.env.EMAIL_USER}>`,
  to: user.email, 
  subject: "Redefinição de senha",
  html: `<p>Clique no link para redefinir sua senha:</p><a href="${link}">${link}</a>`,
});

  return { message: "Link de redefinição enviado por email." };
};
