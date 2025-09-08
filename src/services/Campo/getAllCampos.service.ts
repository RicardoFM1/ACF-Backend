import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Campos } from "../../entities/campos.entitie";
import { iReturnAllCampos, returnAllCamposSchema } from "../../schemas/campos.schemas";

export const getAllCamposService = async (
  status: string,
  offset: number,
  limit: number
): Promise<{ data: iReturnAllCampos; total: number }> => {
  const campoRepository: Repository<Campos> = AppDataSource.getRepository(Campos);

  const [campoFind, total] = await campoRepository.findAndCount({
    where: { status: status },
    order: { id: "DESC" },
    take: limit,
    skip: offset,
  });

  const data = returnAllCamposSchema.parse(campoFind);

  return { data, total };
};
