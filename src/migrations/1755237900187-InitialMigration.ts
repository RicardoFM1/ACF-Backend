import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1755237900187 implements MigrationInterface {
    name = 'InitialMigration1755237900187'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "horarios" RENAME COLUMN "dia_da_semanas" TO "dia_da_semana"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "horarios" RENAME COLUMN "dia_da_semana" TO "dia_da_semanas"`);
    }

}
