var server = require('./Server');

var persianize = require('./persianize');

console.log( "This Experation is persian number {1}: --------------- " +  persianize.validator().number('1') );
console.log( "This Experation is persian number {۳}: --------------- " + persianize.validator().number('۳'));
console.log( "This Experation is persian alpha {persian}: --------------- " +  persianize.validator().alpha('persian') );
console.log( "This Experation is persian alpha {فارسی}: --------------- " + persianize.validator().alpha('فارسی'));
console.log( "This Experation is persian alpha_num {persian}: --------------- " +  persianize.validator().alpha_num('persian') );
console.log( "This Experation is persian alpha_num {۳فارسی}: --------------- " + persianize.validator().alpha_num('۳فارسی'));
console.log( "This Experation is persian text {persian}: --------------- " +  persianize.validator().text('persian') );
console.log( "This Experation is persian text {۳ فارسی}: --------------- " + persianize.validator().text('۳ فارسی'));
console.log("convert english number to persian number: ----------------- " + persianize.convert().number("321").get());

// server.run();
