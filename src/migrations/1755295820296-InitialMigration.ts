import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1755295820296 implements MigrationInterface {
    name = 'InitialMigration1755295820296'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "agendamentos" ("id" SERIAL NOT NULL, "horario" character varying NOT NULL, "dia_do_mes" character varying NOT NULL, "mes_do_ano" character varying NOT NULL, "camposId" integer, "usuariosId" integer, CONSTRAINT "PK_3890b7448ebc7efdfd1d43bf0c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "campos" DROP COLUMN "lugar"`);
        await queryRunner.query(`ALTER TABLE "campos" ADD "endereco" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "campos" ADD "valor" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "agendamentos" ADD CONSTRAINT "FK_2a088791141b299cb368c6530eb" FOREIGN KEY ("camposId") REFERENCES "campos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "agendamentos" ADD CONSTRAINT "FK_987610f1ee41bb4d1116564c387" FOREIGN KEY ("usuariosId") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agendamentos" DROP CONSTRAINT "FK_987610f1ee41bb4d1116564c387"`);
        await queryRunner.query(`ALTER TABLE "agendamentos" DROP CONSTRAINT "FK_2a088791141b299cb368c6530eb"`);
        await queryRunner.query(`ALTER TABLE "campos" DROP COLUMN "valor"`);
        await queryRunner.query(`ALTER TABLE "campos" DROP COLUMN "endereco"`);
        await queryRunner.query(`ALTER TABLE "campos" ADD "lugar" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "agendamentos"`);
    }

}
