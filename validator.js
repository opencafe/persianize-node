exports.validate = function(num){
  var reg = /^\d+$/;
  if(reg.test(num)){
    return num;
  }
  else{
    console.log("Is Not Valid");
  }
}
