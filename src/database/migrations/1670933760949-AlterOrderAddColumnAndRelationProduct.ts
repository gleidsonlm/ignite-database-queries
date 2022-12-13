import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterOrderAddColumnAndRelationProduct1670933760949 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'orders',
            new TableColumn({
                name: 'productId',
                type: 'uuid',
            })
        )

        await queryRunner.createForeignKey(
            'orders',
            new TableForeignKey({
                columnNames: ['productId'],
                referencedTableName: 'products',
                referencedColumnNames: ['id'],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
