import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1755389802679 implements MigrationInterface {
    name = 'InitialMigration1755389802679'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "horarios" ("id" SERIAL NOT NULL, "dia_da_semana" character varying NOT NULL, "horario_inicial" character varying NOT NULL, "horario_final" character varying NOT NULL, CONSTRAINT "PK_c69b602fc8441125f1310a4858d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "admin" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_446adfc18b35418aac32ae0b7b5" UNIQUE ("email"), CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "campos" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "endereco" character varying NOT NULL, "descricao" character varying NOT NULL, "imagem" character varying NOT NULL, "valor" integer NOT NULL, "horariosId" integer, CONSTRAINT "PK_354272e954a46096a9392ee3c98" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "agendamentos" ("id" SERIAL NOT NULL, "horario" character varying NOT NULL, "data" character varying NOT NULL, "camposId" integer, "usuariosId" integer, CONSTRAINT "PK_3890b7448ebc7efdfd1d43bf0c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "campos" ADD CONSTRAINT "FK_cd50d135e86e70e28280bfdbc90" FOREIGN KEY ("horariosId") REFERENCES "horarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "agendamentos" ADD CONSTRAINT "FK_2a088791141b299cb368c6530eb" FOREIGN KEY ("camposId") REFERENCES "campos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "agendamentos" ADD CONSTRAINT "FK_987610f1ee41bb4d1116564c387" FOREIGN KEY ("usuariosId") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agendamentos" DROP CONSTRAINT "FK_987610f1ee41bb4d1116564c387"`);
        await queryRunner.query(`ALTER TABLE "agendamentos" DROP CONSTRAINT "FK_2a088791141b299cb368c6530eb"`);
        await queryRunner.query(`ALTER TABLE "campos" DROP CONSTRAINT "FK_cd50d135e86e70e28280bfdbc90"`);
        await queryRunner.query(`DROP TABLE "agendamentos"`);
        await queryRunner.query(`DROP TABLE "campos"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
        await queryRunner.query(`DROP TABLE "horarios"`);
    }

}
