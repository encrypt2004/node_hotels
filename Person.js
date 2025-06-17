const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required:true
    },
    salary: {
        type: String,
        required:true
    }
});
 // whatever used in another side whose half part or singular part is used on left side....just like perosn  & personSchema  or human & humanSchema
const Person = mongoose.model('person', personSchema);
module.exports = Person;
