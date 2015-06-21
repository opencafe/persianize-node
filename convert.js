
exports.number = function( num ) {

	var per_num = [ "\xDB\xB0", "\xDB\xB1", "\xDB\xB2", "\xDB\xB3", "\xDB\xB4", "\xDB\xB5", "\xDB\xB6", "\xDB\xB7", "\xDB\xB8", "\xDB\xB9" ];

  var persian_num = "";

  //num = String(num);

  for (var i = 0; i < num.length; i++) {

    persian_num += (parseInt(per_num[parseInt(num.charAt(i))], 16)).toString();

  }

  return persian_num;

}
