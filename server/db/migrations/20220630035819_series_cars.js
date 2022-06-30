/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('seriescars', (table) => {
    table.increments('id').primary()
    table.integer('car_id').references('cars.id')
    table.integer('series_id').references('series.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('seriescars')
}
