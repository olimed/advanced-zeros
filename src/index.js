module.exports = function getZerosCount(number, base) {
  // your implementation

  function getSimpleMultipliers(numb){
    let simpleMultipliers = [];
    let i = 2;
    let currNumb = numb;
    while (numb % i == 0){      
      numb /= i;
    }
    if (currNumb != numb)
      simpleMultipliers.push(2);
    for(i = 3; i <= currNumb; i += 2){
      if (numb % i == 0){
        simpleMultipliers.push(i);
        numb /= i;
      }
    }
    return simpleMultipliers
  }

  function getPower(numb, base){
    let power = 0;
    let currBase = base;
    while (currBase <= numb){
      currBase *= base; 
      power++;
    } 
    return power
  }

  let buf = [];
  let currNumb = number;
  let count = 0;
  let power = 0;
  let zerosCount = 0;
  let simpleMultipliersBase = getSimpleMultipliers(base);
  
  for (let i = 0; i < simpleMultipliersBase.length; i++){
    count = 0;
    power = getPower(number, simpleMultipliersBase[i]);
    while (power != 0){
      count = count + Math.floor(number / Math.pow(simpleMultipliersBase[i], power));
      power--;
    }    
    buf.push(count);
  }
  zerosCount = Math.min.apply(Math, buf);

  return zerosCount 
}
