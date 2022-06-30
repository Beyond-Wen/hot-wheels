/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex('seriescars').insert([
    {
      id: 1,
      series_id: 2,
      car_id: 1,
    },
    {
      id: 2,
      series_id: 2,
      car_id: 2,
    },
    {
      id: 3,
      series_id: 2,
      car_id: 3,
    },
    {
      id: 4,
      series_id: 1,
      car_id: 4,
    },
    {
      id: 5,
      series_id: 1,
      car_id: 5,
    },
    {
      id: 6,
      series_id: 3,
      car_id: 6,
    },
  ])
}
