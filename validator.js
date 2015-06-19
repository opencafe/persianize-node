exports.validate = function(num){
  var reg = /^\d+$/;
  if(reg.test(num)){
    return num;
  }
  else{
    return "Is Not Valid";
  }
}
