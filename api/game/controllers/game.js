'use strict';

module.exports = {
  populate: async (ctx) => {
    console.info('Starting to populate...')

    const options = {
      page: '1',
      sort: 'popularity',
      ...ctx.query,
    };
    console.log(options)
    await strapi.services.game.populate(options);

    console.info('Starting to populate...')
    ctx.send('Finishing populate!');
  },
};
