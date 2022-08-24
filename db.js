const { DataStore } = require('notarealdb');

const store = new DataStore('./dada');

module.exports = {
  students:store.collection('students'),
  students:store.collection('colleges')
};
