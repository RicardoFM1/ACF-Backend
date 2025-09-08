import { ForgotPasswordService } from "../services/User/forgotPassword.service";
import { ResetPasswordService } from "../services/User/resetPassword.service";
import { Request, Response } from "express"

export const forgotPasswordController = async(req:Request, res:Response) => {
    try {
    const { email } = req.body;
    const result = await ForgotPasswordService(email);
    res.json(result);
  } catch (err: any) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};
export const resetPasswordController = async (req:Request, res:Response) => {

  try {
    const { token, novaSenha } = req.body;
    const result = await ResetPasswordService(token, novaSenha);
    res.json(result);
  } catch (err: any) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
}