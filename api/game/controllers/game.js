'use strict';

module.exports = {
  populate: async (ctx) => {
    console.log('Starting to populate...')

    const options = {
      page: '1',
      sort: 'popularity',
      ...ctx.query,
    };

    await strapi.services.game.populate(options);

    ctx.send('Finishing populate!');
  },
};
