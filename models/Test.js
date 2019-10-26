const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema(
  {
    uom: { type: String },
    matcode: { type: String },
    description: { type: String },
    'sl no': { type: String }
  },
  { collection: 'test' }
);

module.exports = Test = mongoose.model('test', TestSchema);
