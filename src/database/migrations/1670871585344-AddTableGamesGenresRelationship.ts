import {Index, MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex} from "typeorm";

export class AddTableGamesGenresRelationship1670871585344 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'games_genres',
                columns: [
                    {
                        name: 'gamesId',
                        type: 'uuid',
                    },
                    {
                        name: 'genresId',
                        type: 'uuid',
                    }
                ]
            })
        )
        await queryRunner.createForeignKey(
            'games_genres',
            new TableForeignKey({
                columnNames: ['gamesId'],
                referencedTableName: 'games',
                referencedColumnNames: ['id'],
            })
        )

        await queryRunner.createForeignKey(
            'games_genres',
            new TableForeignKey({
                columnNames: ['genresId'],
                referencedTableName: 'genres',
                referencedColumnNames: ['id'],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('games_genres')
    }

}
