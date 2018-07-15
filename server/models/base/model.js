let mongoose = require('mongoose');

class BaseModel {
    constructor(name, schema, collection) {
        this.name = name;
        this.collection = collection ? collection : null;
        this.schema = new mongoose.Schema(schema);
    }

    build() {
        return mongoose.model(this.name, this.schema, this.collection);
    }
}

module.exports = BaseModel;