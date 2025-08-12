import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1754959798212 implements MigrationInterface {
    name = 'InitialMigration1754959798212'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "horarios" ("id" SERIAL NOT NULL, "dia_da_semana" character varying NOT NULL, "horario_inicial" character varying NOT NULL, "horario_final" character varying NOT NULL, CONSTRAINT "PK_c69b602fc8441125f1310a4858d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "campos" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "lugar" character varying NOT NULL, "descricao" character varying NOT NULL, "imagem" character varying NOT NULL, "idHorarioId" integer, CONSTRAINT "PK_354272e954a46096a9392ee3c98" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "campos" ADD CONSTRAINT "FK_598f840c4f9145c6937e56f34ba" FOREIGN KEY ("idHorarioId") REFERENCES "horarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "campos" DROP CONSTRAINT "FK_598f840c4f9145c6937e56f34ba"`);
        await queryRunner.query(`DROP TABLE "campos"`);
        await queryRunner.query(`DROP TABLE "horarios"`);
    }

}
