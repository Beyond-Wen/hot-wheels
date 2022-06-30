/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex('series').insert([
    {
      id: 1,
      series_name: 'Sporty Sportscars',
    },
    {
      id: 2,
      series_name: 'Mario and Friends',
    },
    {
      id: 3,
      series_name: 'Muscle Cars',
    },
  ])
}
