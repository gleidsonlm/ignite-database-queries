import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTableProducts1670929331202 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'products',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'uuid',
                },
                {
                    name: 'gameId',
                    type: 'uuid'
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'description',
                    type: 'varchar',
                },
                {
                    name: 'category',
                    type: 'varchar',
                },
                {
                    name: 'status',
                    type: 'varchar'
                },
                {
                    name: 'price_full',
                    type: 'decimal',
                },
                {
                    name: 'price_sale',
                    type: 'decimal',
                },
                {
                    name: 'available_start',
                    type: 'timestamp',
                },
                {
                    name: 'available_end',
                    type: 'timestamp',
                },
                {
                    name: 'inventory',
                    type: 'integer',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }))

        await queryRunner.createForeignKey(
            'products',
            new TableForeignKey({
                columnNames: ['gameId'],
                referencedTableName: 'games',
                referencedColumnNames: ['id'],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
