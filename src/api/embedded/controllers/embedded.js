'use strict';

/**
 * embedded controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::embedded.embedded');
