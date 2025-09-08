import { ForgotPasswordService } from "../services/User/forgotPassword.service";
import { ResetPasswordService } from "../services/User/resetPassword.service";
import { Request, Response } from "express"

export const forgotPasswordController = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    await ForgotPasswordService(email); 
    return res.status(200).json({ message: "Link de redefinição enviado por email." });
  } catch (err: any) {
    return res.status(err.statusCode || 400).json({ message: err.message || "Erro ao enviar email" });
  }
};
export const resetPasswordController = async (req:Request, res:Response) => {

  try {
    const { token, novaSenha } = req.body;
    const result = await ResetPasswordService(token, novaSenha);
    return res.status(200).json({message: "Senha redefinida com sucesso!"});
  } catch (err: any) {
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
}