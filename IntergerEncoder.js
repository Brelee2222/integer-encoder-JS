function decode(string) {
  var cars = '0x'
  for(car = 0; car < string.length; car++) {
    if (Number(string[car].charCodeAt()).toString(16).length == 2){
      cars += Number(string[car].charCodeAt()).toString(16);
    };
  };
  if (String(parseInt(cars,16)).includes('e')) {
    throw new Error(("String (" + string + ") too complex and the integer for was therefore rounded the integer (" + parseInt(cars,16) + ")"));
  };
  return parseInt(cars,16);
};
function encode(integer) {
  var otpt = integer.toString(16)
  var str = ''
  if (String(otpt).length / 2 != (String(otpt).length / 2).toFixed(1)) {
    otpt += '0'
  };
  
  for(i = 0;i < (String(otpt).length / 2); i++) {
    str += String.fromCharCode(parseInt((otpt[2*i] + otpt[2*i+1]),16));
  };
  return str
};
