var faker = require("faker");

function randomProduct (num) {
    for(var i = 0; i < num; i++) {
        console.log(faker.commerce.productName() + ' - R$ ' + faker.commerce.price());        
    }
}

randomProduct(10);