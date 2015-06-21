var server = require('./Server');

var persianize = require('./persianize');

console.log( "This Experation is persian number {1}: --------------- " +  persianize.validator().number('1') );
console.log( "This Experation is persian number {۳}: --------------- " + persianize.validator().number('۳'));
console.log( "This Experation is persian alpha {persian}: --------------- " +  persianize.validator().alpha('persian') );
console.log( "This Experation is persian alpha {فارسی}: --------------- " + persianize.validator().alpha('فارسی'));

// server.run();