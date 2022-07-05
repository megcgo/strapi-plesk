'use strict';

/**
 * quem-somos service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::quem-somos.quem-somos');
