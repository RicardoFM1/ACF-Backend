import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1757316308522 implements MigrationInterface {
    name = 'InitialMigration1757316308522'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "admin" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_446adfc18b35418aac32ae0b7b5" UNIQUE ("email"), CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "campos" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "endereco" character varying NOT NULL, "descricao" character varying NOT NULL, "imagem" character varying NOT NULL, "status" character varying NOT NULL DEFAULT 'inativo', "valor" integer NOT NULL, CONSTRAINT "PK_354272e954a46096a9392ee3c98" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "horarios" ("id" SERIAL NOT NULL, "dia_da_semana" character varying NOT NULL, "status" character varying NOT NULL DEFAULT 'inativo', "horario_inicial" character varying NOT NULL, "horario_final" character varying NOT NULL, "camposId" integer, CONSTRAINT "PK_c69b602fc8441125f1310a4858d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "agendamentos" ("id" SERIAL NOT NULL, "horario" character varying NOT NULL, "status" character varying NOT NULL DEFAULT 'inativo', "data" character varying NOT NULL, "camposId" integer, "usuariosId" integer, CONSTRAINT "PK_3890b7448ebc7efdfd1d43bf0c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "horarios" ADD CONSTRAINT "FK_56cb428c3d4b42ddfe9e77480fb" FOREIGN KEY ("camposId") REFERENCES "campos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "agendamentos" ADD CONSTRAINT "FK_2a088791141b299cb368c6530eb" FOREIGN KEY ("camposId") REFERENCES "campos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "agendamentos" ADD CONSTRAINT "FK_987610f1ee41bb4d1116564c387" FOREIGN KEY ("usuariosId") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agendamentos" DROP CONSTRAINT "FK_987610f1ee41bb4d1116564c387"`);
        await queryRunner.query(`ALTER TABLE "agendamentos" DROP CONSTRAINT "FK_2a088791141b299cb368c6530eb"`);
        await queryRunner.query(`ALTER TABLE "horarios" DROP CONSTRAINT "FK_56cb428c3d4b42ddfe9e77480fb"`);
        await queryRunner.query(`DROP TABLE "agendamentos"`);
        await queryRunner.query(`DROP TABLE "horarios"`);
        await queryRunner.query(`DROP TABLE "campos"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
    }

}
