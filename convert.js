exports.number = function(num) {
	var per_num = [
    '۰','۱','۲','۳','۴',
    '۵','۶','۷','۸','۹'
  ];
  var str_num = "";
  //num = String(num);
  for (var i = 0; i < num.length; i++) {
    str_num += per_num[parseInt(num.charAt(i))];
  }
  return str_num;
}
