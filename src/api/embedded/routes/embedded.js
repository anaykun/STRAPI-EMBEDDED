'use strict';

/**
 * embedded router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::embedded.embedded');
