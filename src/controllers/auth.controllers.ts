import { ForgotPasswordService } from "../services/User/forgotPassword.service";
import { ResetPasswordService } from "../services/User/resetPassword.service";
import { Request, Response } from "express"

export const forgotPasswordController = async (req: Request, res: Response) => {
    const { email } = req.body;
    await ForgotPasswordService(email); 
    return res.status(200).json({ message: "Link de redefinição enviado por email." });
  
};
export const resetPasswordController = async (req:Request, res:Response) => {
    const { token, novaSenha } = req.body;
    const result = await ResetPasswordService(token, novaSenha);
    return res.status(200).json({message: "Senha redefinida com sucesso!"});
  
}