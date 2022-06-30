/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('cars', (table) => {
    table.increments('id').primary()
    table.string('model_name')
    table.string('model_image')
    table.integer('series_id').references('series.id')
    table.integer('year')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('cars')
}
