/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = function (knex) {
  return knex('cars').insert([
    {
      id: 1,
      model_name: 'Tesla Cybertruck',
      model_image:
        'https://i.etsystatic.com/21588727/r/il/f89fab/3386207956/il_1588xN.3386207956_i9mm.jpg',
      series_id: 2,
      year: 2024,
    },
    {
      id: 2,
      model_name: 'Porsche 911',
      model_image:
        'https://i0.wp.com/lamleygroup.com/wp-content/uploads/2014/02/7b576-img_9905.jpg?ssl=1',
      series_id: 2,
      year: 1992,
    },
    {
      id: 3,
      model_name: 'Quick Speed Racer',
      model_image:
        'https://s3-us-west-2.amazonaws.com/images.collecthw.com/eb8158ad-e993-41fd-8236-fbc74a89f5e1_large.png',
      series_id: 2,
      year: 1998,
    },
    {
      id: 4,
      model_name: 'Tour de Fast',
      model_image:
        'https://s3-us-west-2.amazonaws.com/images.collecthw.com/5bfb68de-904c-4ce6-9aa8-a168604cde5a_large.png',
      series_id: 1,
      year: 2005,
    },
    {
      id: 5,
      model_name: 'Holden Commodore',
      model_image:
        'https://www.farmers.co.nz/INTERSHOP/static/WFS/Farmers-Shop-Site/-/Farmers-Shop/en_NZ/product/63/31/608/1/6331608_00_W900_H1173.jpg',
      series_id: 1,
      year: 2021,
    },
  ])
}
