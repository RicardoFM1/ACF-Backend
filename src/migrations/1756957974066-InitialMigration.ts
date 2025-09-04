import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1756957974066 implements MigrationInterface {
    name = 'InitialMigration1756957974066'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "campos" ALTER COLUMN "status" SET DEFAULT 'inativo'`);
        await queryRunner.query(`ALTER TABLE "horarios" ALTER COLUMN "status" SET DEFAULT 'inativo'`);
        await queryRunner.query(`ALTER TABLE "agendamentos" ALTER COLUMN "status" SET DEFAULT 'inativo'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agendamentos" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "horarios" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "campos" ALTER COLUMN "status" DROP DEFAULT`);
    }

}
