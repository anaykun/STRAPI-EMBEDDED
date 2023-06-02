'use strict';

/**
 * embedded service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::embedded.embedded');
