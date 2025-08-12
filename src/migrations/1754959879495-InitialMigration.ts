import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1754959879495 implements MigrationInterface {
    name = 'InitialMigration1754959879495'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "campos" DROP CONSTRAINT "FK_598f840c4f9145c6937e56f34ba"`);
        await queryRunner.query(`ALTER TABLE "campos" RENAME COLUMN "idHorarioId" TO "horariosId"`);
        await queryRunner.query(`ALTER TABLE "campos" ADD CONSTRAINT "FK_cd50d135e86e70e28280bfdbc90" FOREIGN KEY ("horariosId") REFERENCES "horarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "campos" DROP CONSTRAINT "FK_cd50d135e86e70e28280bfdbc90"`);
        await queryRunner.query(`ALTER TABLE "campos" RENAME COLUMN "horariosId" TO "idHorarioId"`);
        await queryRunner.query(`ALTER TABLE "campos" ADD CONSTRAINT "FK_598f840c4f9145c6937e56f34ba" FOREIGN KEY ("idHorarioId") REFERENCES "horarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
