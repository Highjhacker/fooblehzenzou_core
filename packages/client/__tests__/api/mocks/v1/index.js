const axios = require('axios')
const MockAdapter = require('axios-mock-adapter')

const Accounts = require('./accounts')
const Blocks = require('./blocks')
const Delegates = require('./delegates')
const Loader = require('./loader')
const Peers = require('./peers')
const Signatures = require('./signatures')
const Transactions = require('./transactions')

const mock = new MockAdapter(axios)

Accounts(mock)
Blocks(mock)
Delegates(mock)
Loader(mock)
Peers(mock)
Signatures(mock)
Transactions(mock)
