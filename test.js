const {sum} = require('./app.js');

test('adds 14 + 9 to equal 23', ()=>{
    let total = sum(14,9);
    expect(total).toBe(23);
})

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dolar should be 106.5 yenes", function(){
    const { fromDolarToYen} = require('./app.js')
    expect(fromDolarToYen(5)).toBe(532.5)
})

test("One yen should be 0.006 GBP", function(){
    const {fromYenToGbp} = require("./app.js");
    expect(fromYenToGbp(1000)).toBe(6)
})