const fs = require('fs');
const path = require('path');
const customPath = require('../util/path');
const p = path.join(customPath, 'data', 'products.json');

// Gets products from file
const getProductsFromFile = cb => {

    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    })
}

module.exports = class Product {
    constructor(title) {
        this.title = title
    }

    save() {
        getProductsFromFile(products => {
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.error(err)
            });
        })
    }

    static fetchAll(cb) {
        getProductsFromFile(cb)
    }
}