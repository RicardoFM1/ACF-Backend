import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1755146592413 implements MigrationInterface {
    name = 'InitialMigration1755146592413'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "campos" DROP CONSTRAINT "FK_b17c83b6b4e733cfcb622098aa3"`);
        await queryRunner.query(`ALTER TABLE "campos" RENAME COLUMN "horariossId" TO "horariosId"`);
        await queryRunner.query(`ALTER TABLE "campos" ADD CONSTRAINT "FK_cd50d135e86e70e28280bfdbc90" FOREIGN KEY ("horariosId") REFERENCES "horarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "campos" DROP CONSTRAINT "FK_cd50d135e86e70e28280bfdbc90"`);
        await queryRunner.query(`ALTER TABLE "campos" RENAME COLUMN "horariosId" TO "horariossId"`);
        await queryRunner.query(`ALTER TABLE "campos" ADD CONSTRAINT "FK_b17c83b6b4e733cfcb622098aa3" FOREIGN KEY ("horariossId") REFERENCES "horarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
