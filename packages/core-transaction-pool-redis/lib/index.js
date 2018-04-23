'use strict';

const TransactionHandler = require('./handler')

/**
 * [plugin description]
 * @type {Object}
 */
exports.plugin = {
  pkg: require('../package.json'),
  defaults: require('./defaults'),
  alias: 'transaction-handler',
  register: async (manager, options) => {
    manager.get('logger').info('Starting Transaction Pool...')

    return new TransactionHandler(options)
  }
}
