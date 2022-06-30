/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = (knex) => {
  return knex('seriescars')
    .del()
    .then(() => knex('cars').del())
    .then(() => knex('series').del())
}
