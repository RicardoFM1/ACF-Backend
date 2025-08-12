import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1754959155577 implements MigrationInterface {
    name = 'InitialMigration1754959155577'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" ADD "admin" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "admin"`);
    }

}
