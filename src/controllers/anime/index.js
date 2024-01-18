// barrel file which is used to import values/functions and export them in one object

const list = require('./list');
const create = require('./create');
const update = require('./update');
const remove = require('./delete');

module.exports = {
    list,
    create,
    update,
    remove,
}