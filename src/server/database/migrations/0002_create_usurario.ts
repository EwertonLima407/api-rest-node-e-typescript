import { ETableNames } from '../ETableNames';
import { Knex } from "knex";


export async function up(knex: Knex) {
  return knex
  .schema
  .createTable(ETableNames.usuario, table => {
    table.bigIncrements('id').primary().index();
    table.string('nome').notNullable().checkLength('>=',3);
    table.string('email').unique().notNullable().checkLength('>',5);
    table.string('senha').index().unique().notNullable().checkLength('>=', 6);
    
    table.comment('Tabela usada para armazenar usuarios do sistema')
  })
  .then(() => {
    console.log(`# Create table ${ETableNames.usuario}`)
  })
}


export async function down(knex: Knex) {
  return knex
  .schema
  .dropTable(ETableNames.usuario)
  .then(() => {
    console.log(`# Dropped table ${ETableNames.usuario}`);
  });
}