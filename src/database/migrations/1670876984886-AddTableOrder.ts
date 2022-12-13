import {Index, MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex} from "typeorm";

export class AddTableOrder1670876984886 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'orders',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                    },
                    {
                        name: 'number',
                        type: 'integer',
                    },
                    {
                        name: 'usersId',
                        type: 'uuid',
                    },
                    {
                        name: 'status',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                    }
                ]
            })
        )

        await queryRunner.createForeignKey(
            'orders',
            new TableForeignKey({
                columnNames: ['usersId'],
                referencedTableName: 'users',
                referencedColumnNames: ['id'],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("orders")
    }

}
