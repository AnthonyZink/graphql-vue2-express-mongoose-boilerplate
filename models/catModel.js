import { model, Schema } from 'mongoose';

const catSchema = new Schema({
  name: String,
});

module.exports = model('Cat', catSchema);